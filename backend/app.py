from flask import Flask, jsonify,  request
from flask_cors import CORS
from datetime import date as d , timedelta
from database import MySqlDB

db = MySqlDB()

app = Flask(__name__) 

CORS(app)  # corss policy violation

@app.route('/loginUser',methods=['POST'])
def login_user():
    username = request.json["username"]
    password = request.json["password"]

    if not username or not password:
        return jsonify({"message": "Some mandatory fields need to be filled"}),400

    check = db.fetchone("SELECT id FROM users WHERE username=%s and password=%s",username,password)

    if not check:
        return jsonify({"message": "Email or password is incorrect"}),400
    
    return jsonify({"message": "login success"}),200


@app.route('/registerUser',methods=['POST'])
def register_user():
    
    username = request.json["username"]
    date = request.json["date"]
    password = request.json["password"]
    repassword = request.json["confirmPassword"]
    email = request.json["email"]
    phoneNumber = request.json["phoneNumber"]

    # check = db.fetchone("SELECT * FROM login WHERE email=%s",email)
    # if check:
    #     return jsonify({"message": "This Email is already registered!"}),400

    if password!=repassword:
        return jsonify({"message": "Passwords does not match!"}),400
    
    db.execute("INSERT INTO users(username,date,password,email,phone) VALUES(%s,%s,%s,%s,%s)",username,date,password,email,phoneNumber)
    return jsonify({"message": "Account Registered successfully."}),200

@app.route('/loginDoctor', methods=['POST'])
def login_doctor():
    username = request.json["username"]
    password = request.json["password"]

    if not username or not password:
        return jsonify({"message": "Some mandatory fields need to be filled"}), 400

    check = db.fetchone("SELECT id FROM doctors WHERE username=%s and password=%s", username, password)

    if not check:
        return jsonify({"message": "Email or password is incorrect"}), 400

    return jsonify({"message": "login success"}), 200


@app.route('/registerDoctor', methods=['POST'])
def register_doctor():
    username = request.json["username"]
    date = request.json["date"]
    password = request.json["password"]
    repassword = request.json["confirmPassword"]
    email = request.json["email"]
    phoneNumber = request.json["phoneNumber"]


    if password != repassword:
        return jsonify({"message": "Passwords do not match!"}), 400

    db.execute("INSERT INTO doctors(username, date, password, email, phoneNumber) VALUES(%s, %s, %s, %s, %s)",
               username, date, password, email, phoneNumber)
    return jsonify({"message": "Account Registered successfully."}), 200



@app.route('/scheduleAppointment', methods=['POST'])
def schedule_appointment():
    patient_name = request.json["patientName"]
    doctor_name = request.json["doctorName"]
    date = request.json["date"]
    time = request.json["time"]

    # try:
        # Find the patient ID
    patient_query = "SELECT id FROM users WHERE username=%s"
    patient = db.fetchone(patient_query, patient_name)
    if not patient:
        return jsonify({"message": "Patient not found"}), 404
    patient_id = patient[0]
    print(f"Patient ID: {patient[0]}")   
    # Find the doctor ID
    doctor_query = "SELECT id FROM doctors WHERE username=%s"
    doctor = db.fetchone(doctor_query, doctor_name)
    if not doctor:
        return jsonify({"message": "Doctor not found"}), 404
    doctor_id = doctor[0]
    print(f"Doctor ID: {doctor_id}")
    # Insert the appointment into the database
    insert_query = "INSERT INTO appointments(patient_id, doctor_id, patient_name, doctor_name, date, time) VALUES(%s, %s, %s, %s, %s, %s)"
    db.execute(insert_query,patient_id, doctor_id, patient_name, doctor_name ,date, time)

    return jsonify({"message": "Appointment scheduled successfully."}), 200
    #   cept Exception as e:
    #     print(f"Error: {e}")
    #     return jsonify({"message": "Error scheduling appointment", "error": str(e)}), 500



@app.route('/finishAppointment', methods=['POST'])
def finish_appointment():
    appointment_id = request.json["appointmentId"]
    
    # try:
        # Fetch the appointment details
    appointment_id,patient_id,doctor_id,patient_name,doctor_name,appointment_date,appointment_time = db.fetchone("SELECT * FROM appointments WHERE appointment_id=%s", appointment_id)
    if not appointment_id:
        return jsonify({"message": "Appointment not found"}), 404
    
    print(patient_id, doctor_id, patient_name, doctor_name, appointment_date, appointment_time)
        
    # Insert the finished appointment into ScheduledAppointments
    insert_query = "INSERT INTO scheduledappointments (patient_id, doctor_id, patient_name, doctor_name, date, time) VALUES (%s, %s, %s, %s, %s, %s)"
    print(type(appointment_date), type(appointment_time))
    db.execute(insert_query, 
        patient_id, doctor_id, patient_name, doctor_name, appointment_date, appointment_time
    )
    
    # Optionally, you can delete the appointment from the appointments table
    db.execute("DELETE FROM appointments WHERE appointment_id=%s", appointment_id,)
    
    return jsonify({"message": "Appointment finished successfully."}), 200
    # except Exception as e:
    #     return jsonify({"message": "Error finishing appointment", "error": str(e)}), 500
    


@app.route('/getBloodBankDetails', methods=['GET'])
def get_blood_bank_details():
    try:
        blood_bank_details = db.fetchall('SELECT * FROM bloodbank')
        
        # Convert the blood bank details to a serializable format
        serialized_details = []
        for detail in blood_bank_details:
            serialized_detail = {
                'user_id': detail[0],
                'name': detail[1],
                'blood_type': detail[2],
                'age': detail[3],
                'date': detail[4].isoformat(),  # Convert date to string
            }
            serialized_details.append(serialized_detail)
        
        return jsonify(serialized_details), 200
    except Exception as e:
        return jsonify({"message": "Error fetching blood bank details", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)




@app.route('/getScheduledAppointments', methods=['GET'])
def get_scheduled_appointments():
    try:
        appointments = db.fetchall("SELECT * FROM appointments")
        
        # Convert the appointments to a serializable format
        serialized_appointments = []
        for appointment in appointments:
            serialized_appointment = {
                "id": appointment[0],
                "patient_id": appointment[1],
                "doctor_id": appointment[2],
                "patient_name": appointment[3],
                "doctor_name": appointment[4],
                "date": appointment[5].isoformat(),  # Convert date to string
                "time": str(appointment[6])  # Convert timedelta to string
            }
            serialized_appointments.append(serialized_appointment)
        
        return jsonify(serialized_appointments), 200
    except Exception as e:
        return jsonify({"message": "Error fetching appointments", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
    
