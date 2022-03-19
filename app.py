from flask import Flask, jsonify, request, session
import os
import io
from flask_cors import CORS
from flask_session import Session
from werkzeug.utils import secure_filename
import configparser
import redshift_connector
import mysql.connector
import time

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"
app.config['SESSION_FILE_THRESHOLD'] = 100
app.config['TEMPLATES_AUTO_RELOAD'] = True

Session(app)
CORS(app)

@app.route('/api/fetch_results', methods=["POST", "GET"])
def setSession():
    try:
        FormInput = request.get_json(force = True)
        query = FormInput['query']
        database = FormInput['database']
        print(query, database)
        if(database == 'Redshift'):
            conn = redshift_connector.connect(
            host='redshift-cluster-1.c3owskjnuooc.us-east-1.redshift.amazonaws.com',
            database='dev',
            user='awsuser',
            #password='F6ZDyprATZgWA29'
            )
            cursor = conn.cursor()
            cursor.execute(query)
            result = cursor.fetchall()
            print(result)

        if(database == 'RDS'):
            mydb = mysql.connector.connect(
            host = "proj1.cijjjogzpczd.us-east-1.rds.amazonaws.com", 
            user = "admin", 
            password = "rdsadminPASS", 
            database = "proj1_db",
            )
            cursor = mydb.cursor()
            start_time = time.time()
            cursor.execute(query)
            fields = [field_md[0] for field_md in cursor.description]
            result = cursor.fetchall()
            end_time = time.time()
            print(result)
            print(fields)

    except Exception as e:
        print(str(e))
        return jsonify({'status': str(e)})

    else:
        return jsonify({'status': 'Done', 'result': result, 'fields': fields, 'time': round(end_time - start_time, 4)})

app.run(debug = False, port = 5001, host='0.0.0.0')