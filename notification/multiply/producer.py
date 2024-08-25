from confluent_kafka import Producer
import json

KAFKA_BROKER = 'localhost:9092'
KAFKA_TOPIC = 'notifications'

def send_notification_to_kafka(notification_data):
    producer = Producer({'bootstrap.servers': KAFKA_BROKER})
    producer.produce(KAFKA_TOPIC, json.dumps(notification_data))
    producer.flush()
