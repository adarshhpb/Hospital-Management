import mysql.connector as msq

class MySqlDB:
    def __init__(self,conf:dict=None) -> None:
        self.db_config = conf or {
            'host': "localhost",
            'user':"root",
            'password': "",
            'database': "mydata"
        }
        self.con:msq.MySQLConnection=None
        self.cur=None


    @classmethod
    def fromCustomConfig(cls,conf:dict):
        return cls(conf)

    def _connect(self):
        self.con:msq.MySQLConnection=msq.connect(**self.db_config)
        self.cur=self.con.cursor()

    def _commit(self,query:str) -> None:
        if any([query.upper().startswith(i) for i in ("INSERT","UPDATE","DELETE")]):
            self.con.commit()

    def close(self) ->  None:
        self.con.close()
        self.cur.close()

    def execute(self,query:str,*args:tuple):
        self._connect()
        self.cur.execute(query,args)
        self._commit(query)
        self.close()

    def fetchone(self,query:str,*args:tuple):
        self._connect()
        self.cur.execute(query,args)
        result = self.cur.fetchone()
        self.close()
        return result

    def fetchall(self,query:str,*args:tuple):
        self._connect()
        self.cur.execute(query,args)
        result = self.cur.fetchall()
        self.close()
        return result