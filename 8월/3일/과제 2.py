from flask import Flask, render_template
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'your_username'
app.config['MYSQL_DATABASE_PASSWORD'] = 'your_password'
app.config['MYSQL_DATABASE_DB'] = 'your_database'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

@app.route('/')
def index():
    # Open a connection
    conn = mysql.connect()
    cursor = conn.cursor()

    # Execute a SQL query and fetch the result
    cursor.execute("SELECT * FROM your_table")
    data = cursor.fetchall()

    # Close the connection
    cursor.close() 
    conn.close()

    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
