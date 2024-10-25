from flask import Flask, render_template, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/achievements')
def achievements():
    return render_template('achievements.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.json
    
    msg = MIMEMultipart()
    msg['From'] = data['email']
    msg['To'] = 'zakiamhbb27@gmail.com'
    msg['Subject'] = f"New contact form message from {data['name']}"

    body = f"Name: {data['name']}\nEmail: {data['email']}\nMessage: {data['message']}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        # Use environment variables for sensitive information
        server.login(os.environ.get('EMAIL_USER'), os.environ.get('EMAIL_PASS'))
        text = msg.as_string()
        server.sendmail(data['email'], 'zakiamhbb27@gmail.com', text)
        server.quit()
        return jsonify({"message": "Email sent successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
