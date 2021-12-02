from flask import Flask, request

from repository import connect, get_users, get_user_by_username, create_user, delete_user, edit_user


app = Flask(__name__)

@app.route("/api/v1/users", methods=["GET", "POST"])

def users():
    conn = connect('db/users.db')
    
    if request.method == 'GET':
        users = get_users(conn)
        response = {
            'data' : users
        }
        conn.close()
        return response, 200
    
    if request.method == 'POST':
        new_user_details = request.json
        new_user_details = [
            new_user_details['username'],
            new_user_details['first_name'],
            new_user_details['last_name'],
            new_user_details['email'],
            new_user_details['password'],
            new_user_details['crated_at'],
            new_user_details['last_update'],
            new_user_details['last_singed_in'],
        ]
        create_user(conn, user_details = new_user_details)
        conn.close()
        return '', 200


if __name__ == '__main__':
    app.run(port=5006, debug=True)
