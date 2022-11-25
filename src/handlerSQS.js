// const { decoratorValidator } = require('../../utils/decoratorValidator')
// const { sendEmailSchema } = require('./validators')

const { sendEmailService } = require('./services/sendEmailService')
const { logger } = require('./utils/logger')

const processMessage = (message) => {
  logger.info('process====')
  logger.info(message)
  logger.info('process====')
  sendEmailService()
}

const handler = async (event) => {
  // const body = JSON.parse(event.body)
  const body = eventFake
  const records = body.Records

  for (const record of records) {
    const message = record.messageAttributes
    await processMessage(message)
  }

  return {
    body: JSON.stringify(records),
    statusCode: 200
  }
}

module.exports = {
  // send: decoratorValidator(send, sendEmailSchema)
  handler
}

const eventFake = {
  Records: [
    {
      messageId: '737ef6d8-8dcd-48de-bea7-2ca8ca64dc9c',
      receiptHandle: 'AQEBp9eYQDfzmDRHh/v5vfk2EECe72LdEqWeTBZrof1eESyPLJST07pGQvS3yZLykOUMtVCiuAOPh6MrpvCNeJpHez8W1TVOYzOe/XqLQK1ZSeI+4dnKWC7mdVpMH313ElU0YyUy3qvJNHR2ewk0F7k9su/WkPHjOyPDKCKkb+k/hbn8VrTshuJ7aHLGwmeNEADuoVbfw3UDulQ1SiVDLxZaNbrkQWEEjYMdI8qVEMKmdttIL4lBWi/CHZCEW4VIkrbNOmn+KMcCges4oC3R4oI3qtykQcd1OhpBJi6lL6y+VdLF+IR3OKXYvrxoXrTDBFfrefkLjRTApcjWCBqHkiYeHvCLWnljOqpqujz8ZJzVAY4RIr4CZ2tmxtpbofhc0vas/2RuNa7cHlmlKhQ4butF8w==',
      body: 'RecManagerQueue',
      attributes: {
        ApproximateReceiveCount: '1',
        SentTimestamp: '1669385703039',
        SenderId: 'AROAWO7X67VHRYI62ILS3:8d1cd45d8a68495ba00f750490f026e6',
        ApproximateFirstReceiveTimestamp: '1669385703050'
      },
      messageAttributes: {
        instance_dac: {
          stringValue: '172.29.199.214',
          stringListValues: [],
          binaryListValues: [],
          dataType: 'String'
        },
        filename: {
          stringValue: '63ac301227e8f6009f934cb83a5260f8',
          stringListValues: [],
          binaryListValues: [],
          dataType: 'String'
        },
        org: {
          stringValue: '6376923fd45986011b91e1fd',
          stringListValues: [],
          binaryListValues: [],
          dataType: 'String'
        },
        date_rec: {
          stringValue: '2022-11-25',
          stringListValues: [],
          binaryListValues: [],
          dataType: 'String'
        }
      },
      md5OfMessageAttributes: '094f6bbe8f2f631ddde1b9e7bb811658',
      md5OfBody: '56391f7074d5c76448f9723c9c008a81',
      eventSource: 'aws:sqs',
      eventSourceARN: 'arn:aws:sqs:us-east-1:444512271695:rec_manager_queue',
      awsRegion: 'us-east-1'
    }
  ]
}
