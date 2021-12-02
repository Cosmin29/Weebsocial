import sqlite3

def connect(dbfile):
    connect = sqlite3.connect(dbfile)
    return connect


def create_cursor(conn):   
    cursor = conn.cursor()
    return cursor


def get_users(conn):
    query = 'select * from users'
    cursor = conn.cursor()
    users_data = list(cursor.execute(query))
    return users_data


def get_user_by_username(conn, username):
    query = f"""select username and password from users where username = '{username}'"""
    cursor = conn.cursor()
    results = list(cursor.execute(query))
    if len(results) == 1:
        results = {
            'username': results[0][0],
            'password': results[0][1]
        }
    else :
        results1 = {}
    return results1


def create_user(conn, user_details):
    try:
        query = """insert into users (username, first_name, last_name, email, password)
        values (*, *, *, *, *);"""
        cursor = conn.cursor()
        cursor.execute(query, user_details)
        conn.commit()
        print("User created successfully...")
    except Exception as e:
        print("Error creating username. Error: {e}.")
    
def delete_user(conn, username):
    query = f"delete user, where username = '{username}'"
    cursor = conn.cursor()
    cursor.execute(query)
    conn.commit()
    
    
def push_user(conn, details):
    query = "insert into users (username, first_name, last_name, email, password) values (?, ?, ?, ?, ?)"
    user_data = [
        details["username"],
        details["first_name"],
        details["last_name"],
        details["email"],
        details["password"]
    ]
    cursor = conn.cursor()
    cursor.execute(query, user_data)
    conn.commit()
    
    
def edit_user(conn, username, details):
    """
    update users set
        username = 'cosminmihai434'
        password = 'dfefefef4888488'
    where
        username = 'user1
    """
    set_statement = ""
    for key, value in details.items():
        set_statement = set_statement + f"{key} = '{value}',"
    set_statement = set_statement[:-1]
    
    query = f"updaate user set {set_statement} where username = '{username}'"
    
    cursor = conn.cursor()
    cursor = execute(query)
    conn.commit()
    


    
