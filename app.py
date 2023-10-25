from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient

connection_string = 'mongodb+srv://test:sparta@cluster0.f6od9yz.mongodb.net/?retryWrites=true&w=majority'
client = MongoClient(connection_string)
db = client.dbsparta

app = Flask(__name__)

@app.route('/', methods=['GET,POST'])
def home():
    return render_template('index.html')

@app.route('/sum', methods=['POST'])
def sum():
   num1 = request.form['num1']
   num2 = request.form['num2']
   result = int(num1) + int(num2)

   return jsonify({
       'result': result
   })


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)