import sqlite3

# connect to db --> connection object.

def create_connection(dbfile):
    conn = sqlite3.connect(dbfile)
    return conn

# get a cursor --> cursor object.

def create_cursor(conn):   
    cursor = conn.cursor()
    return cursor


# run SQL commands using the cursor + connection objects.
# get all data inside the users table.

def get_all_users(conn):
    
    query = 'select * from users'
    cursor = conn.cursor()
    data = list(cursor.execute(query))
    return data


# insert one user.

def insert_user(conn, user_data):

    query = """insert into users (username, first_name, last_name, email, password)
    values (?, ?, ?, ?, ?);"""
    cursor = conn.cursor()
    cursor.execute(query, user_data)
    conn.commit()

# get user email and pass.

def get_user_email_and_pass(conn, username):
    query = f"""select username, email, password from users where username = '{username}'"""
    cursor = conn.cursor()
    results = list(cursor.execute(query))
    return results[0]