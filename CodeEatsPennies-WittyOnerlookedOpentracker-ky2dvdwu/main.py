from flask import Flask, request, jsonify
import json
app = Flask(__name__)

@app.route('/api/add_message/<uuid>', methods=['GET', 'POST'])
def add_message(uuid):
    content = request.json
    print(content['name'],content['phone'],content['email'])
    with open('jsonpost/'+ uuid +'.json', 'w') as json_file:
        json.dump(content, json_file)
    return jsonify({"uuid":uuid})

if __name__ == '__main__':
    app.run(host= '0.0.0.0',debug=True)




#https://github.com/easonlai/python_json_receiver