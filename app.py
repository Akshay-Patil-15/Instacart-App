from flask import Flask, jsonify, request, session
import os
import io
from flask_cors import CORS
from flask_session import Session
from werkzeug.utils import secure_filename
import configparser
import redshift_connector
import mysql.connector
import psycopg2
import time

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"
app.config['SESSION_FILE_THRESHOLD'] = 100
app.config['TEMPLATES_AUTO_RELOAD'] = True

Session(app)
CORS(app)

# def column_parser(column):
#     if(str(column).startswith('b')):
#         column = str(column)[2:len(str(column)) -1]
#     return column


@app.route('/api/fetch_results', methods=["POST", "GET"])
def setSession():
    try:
        FormInput = request.get_json(force = True)
        query = FormInput['query']
        database = FormInput['database']
        databasetype = FormInput['databasetype']
        print(query, database, databasetype)
        #print(type(query))
        if(database == 'Redshift' and databasetype == 'InstaCart'):
            conn = redshift_connector.connect(
            host = "redshift-cluster-1.c3owskjnuooc.us-east-1.redshift.amazonaws.com",
            database = "dev",
            user = "awsuser",
            password = "F6ZDyprATZgWA29" 
            )

            # conn1 = redshift_connector.connect(
            # host = "instabase-redshift.cw9pifbp7tf6.us-east-1.redshift.amazonaws.com",
            # database = "instacart",
            # user = "awsuser",
            # password = "123Abcd!" 
            # )

            #conn = psycopg2.connect("host=redshift-cluster-1.c3owskjnuooc.us-east-1.redshift.amazonaws.com dbname=dev password=F6ZDyprATZgWA29 user=awsuser")

            cursor1 = conn.cursor()
            cursor1.execute(query)
            info = cursor1.description # Not needed
            #print(cursor1.description)
            start_time = time.time()
            fields = [str(field_md[0])[2:-1] for field_md in cursor1.description]

            # fields1 =[]
            # for i in range(len(info)):
            #     temp_column = info[i][0]
            #     temp_column = column_parser(temp_column)
            #     fields1.append(temp_column)
            result = cursor1.fetchall()
            #print(fields1)
            #fields = result[0]
            end_time = time.time()
            print(result)
            print(fields)

        if(database == 'RDS' and databasetype == 'InstaCart'):
            mydb = mysql.connector.connect(
            host = "proj1.cijjjogzpczd.us-east-1.rds.amazonaws.com",
            user = "admin", 
            password = "rdsadminPASS", 
            database = "proj1_db",
            )
            cursor2 = mydb.cursor()
            start_time = time.time()
            cursor2.execute(query)
            fields = [field_md[0] for field_md in cursor2.description]
            result = cursor2.fetchall()
            end_time = time.time()
            print(result)
            print(fields)

        # ---------------------------- End of InstaCart ----------------------------


        if(database == 'Redshift' and databasetype == 'Challenger'):
            conn1 = redshift_connector.connect(
            host = "redshift-cluster-2.c3owskjnuooc.us-east-1.redshift.amazonaws.com",
            database = "dev",
            user = "awsuser",
            password = "Challenger123#" 
            )

            # conn1 = redshift_connector.connect(
            # host = "instabase-redshift.cw9pifbp7tf6.us-east-1.redshift.amazonaws.com",
            # database = "instacart",
            # user = "awsuser",
            # password = "123Abcd!" 
            # )

            #conn1 = psycopg2.connect("host=redshift-cluster-1.c3owskjnuooc.us-east-1.redshift.amazonaws.com dbname=dev password=F6ZDyprATZgWA29 user=awsuser")

            cursor3 = conn1.cursor()
            cursor3.execute(query)
            info = cursor3.description # Not needed
            print(cursor3.description)
            start_time = time.time()
            fields = [str(field_md[0])[2:-1] for field_md in cursor3.description]

            # fields1 =[]
            # for i in range(len(info)):
            #     temp_column = info[i][0]
            #     temp_column = column_parser(temp_column)
            #     fields1.append(temp_column)
            result = cursor3.fetchall()
            #print(fields1)
            #fields = result[0]
            end_time = time.time()
            print(result)
            print(fields)

        if(database == 'RDS' and databasetype == 'Challenger'):
            mydb = mysql.connector.connect(
            host = " challenger-db.cijjjogzpczd.us-east-1.rds.amazonaws.com",
            user = "admin", 
            password = "challenger123#", 
            database = "challenger",
            )
            cursor4 = mydb.cursor()
            start_time = time.time()
            cursor4.execute(query)
            fields = [field_md[0] for field_md in cursor4.description]
            result = cursor4.fetchall()
            end_time = time.time()
            print(result)
            print(fields)

    except Exception as e:
        print(str(e))
        return jsonify({'status': str(e)})

    else:
        return jsonify({'status': 'Done', 'result': result, 'fields': fields, 'time': round(end_time - start_time, 4)})

app.run(debug = False, port = 3000, host='0.0.0.0')