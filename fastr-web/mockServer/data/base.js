const faker = require('faker')
let dataContracts = [], comments = [], contractId = '', contractName = ''

for (let i = 1; i < 25; i++) {
  contractId = i.toString()
  contractName = faker.company.companyName()

  dataContracts.push({
    id: i.toString(),
    isActive: true,
    contractName: faker.company.companyName(),
    contractEmail: faker.internet.email(),
    hipaaCompliant: faker.commerce.department(),
    lengthOfUse: Math.floor(Math.random() * 12) + 1   + ' Months',
    countryOfOrigin: faker.address.country(),
    usageRestrictions: 'Public',
    usageNotes: '',
    dataURL: '',
    dataType: 'Database',
    approvalType: 'auto-accept',
    currency: 'USD',
    pricingModel: 'Monthly',
    price: faker.finance.amount(),
    createdBy: '0xbf491125e8affe6ebcd091d6589c9213d082f119',
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  })
}

for (let x = 1; x < 3; x++) {
  let commentId = faker.finance.account()
  comments.push({
    id: commentId.toString(),
    pageId: 'page',
    pageType: '',
    parentId: '0',
    authorId: faker.finance.account(),
    authorName: faker.name.firstName(),
    content: faker.lorem.sentences(),
    additionalContent: faker.lorem.text(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  })
  
  for (let y = 0; y < 2; y++) {
    comments.push({
      id: faker.finance.account(),
      pageId: '',
      pageType: '',
      parentId: commentId,
      authorId: faker.finance.account(),
      authorName: faker.name.firstName(),
      content: faker.lorem.sentences(),
      additionalContent: faker.lorem.text(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    })
  }
}

module.exports = {
  dataContracts: dataContracts,
  comments: comments,
  documents: [
    {
      id: 1,
      itemId: '1',
      itemViewType: '',
      data: 'asdsadsadsadsa',
      name: 'document.xls',
      size: 'asdasdsad',
      type: 'xls',
      createdBy: 'user1',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  ],
  alertEmailConfigs: [
    {
      id: 1,
      primaryEmail: 'mockuser@auth.io',
      secondaryEmail: 'gordon@auth.io',
      primaryEmailId: '2e7085769baf11eba8b30242ac130012',
      secondaryEmailId: '2e7085769baf11eba8b30242ac13009'
    }
  ],
  alertConfigs: [
    {
      id: 1,
      plant: 'Tarbes',
      operationId: 'PAINTING',
      productId: '350A210001TC00P4',
      destination: '',
      carrier: '',
      customer: '',
      origin: '',
      limit: '20',
      alertType: 'workOrderQA',
      subscribers: [{}],
      actionPlan: true,
      emailUsers: '',
      emailSubject: '',
      emailBody: '',
      fieldsToAutoReplace: ''
    },
    {
      id: 2,
      plant: '',
      operationId: 'ASSEMBLY',
      productId: '',
      destination: 'Airbus Toulouse',
      carrier: '',
      customer: '',
      origin: 'Tarbes',
      limit: '20',
      alertType: 'temperatureOutOfRange',
      subscribers: [{}],
      actionPlan: true,
      emailUsers: '',
      emailSubject: '',
      emailBody: '',
      fieldsToAutoReplace: ''
    },
    {
      id: 3,
      plant: 'Marignane',
      operationId: '',
      productId: '350A210001TC01E2',
      destination: '',
      carrier: 'FedEx',
      customer: 'Airbus',
      origin: '',
      limit: '',
      alertType: 'quantityMismatch',
      subscribers: [{}],
      actionPlan: true,
      emailUsers: '',
      emailSubject: '',
      emailBody: '',
      fieldsToAutoReplace: ''
    }
  ],
  systems: [
    {
      id: 1,
      name: 'SAP Daher'
    },
    {
      id: 2,
      name: 'SAP Airbus'
    },
    {
      id: 3,
      name: 'SAP Nexa'
    },
    {
      id: 4,
      name: 'Email Server Nexa'
    },
    {
      id: 5,
      name: 'Workflow Automation'
    }
  ],
  tables: [
    {
      id: 1,
      systemId: '1',
      name: 'VA01'
    },
    {
      id: 2,
      systemId: '1',
      name: 'COOIS'
    },
    {
      id: 3,
      systemId: '1',
      name: 'MIGO'
    },
    {
      id: 4,
      systemId: '2',
      name: 'ZLECI'
    },
    {
      id: 5,
      systemId: '2',
      name: 'ZWMQ029'
    },
    {
      id: 6,
      systemId: '2',
      name: 'MIGO'
    },
    {
      id: 7,
      systemId: '3',
      name: 'ZVMQM041'
    },
    {
      id: 8,
      systemId: '3',
      name: 'ZVMLE014'
    },
    {
      id: 9,
      systemId: '4',
      name: 'Impala Warehouse'
    },
    {
      id: 10,
      systemId: '5',
      name: 'User Created Fields'
    }
  ],
  fields: [
    {
      id: 1,
      systemId: '1',
      tableId: '1',
      workflowId: '0',
      name: 'Purchase Order Number'
    },
    {
      id: 2,
      systemId: '1',
      tableId: '1',
      workflowId: '0',
      name: 'Line Item Number'
    },
    {
      id: 3,
      systemId: '1',
      tableId: '2',
      workflowId: '0',
      name: 'Work Order Number'
    },
    {
      id: 4,
      systemId: '1',
      tableId: '3',
      workflowId: '0',
      name: 'Receiving Number'
    },
    {
      id: 5,
      systemId: '1',
      tableId: '3',
      workflowId: '0',
      name: 'Processor Number'
    },
    {
      id: 6,
      systemId: '1',
      tableId: '1',
      workflowId: '0',
      name: 'Invoice Number'
    },
    {
      id: 7,
      systemId: '1',
      tableId: '2',
      workflowId: '0',
      name: 'Production Status'
    },
    {
      id: 8,
      systemId: '1',
      tableId: '1',
      workflowId: '0',
      name: 'Transport Status'
    },
    {
      id: 9,
      systemId: '2',
      tableId: '4',
      workflowId: '0',
      name: 'Logistics Reception Status'
    },
    {
      id: 10,
      systemId: '2',
      tableId: 'ZWMQ029',
      workflowId: '0',
      name: 'Delivery Status'
    },
    {
      id: 11,
      systemId: '1',
      tableId: '1',
      workflowId: '0',
      name: 'Good Issue Date'
    },
    {
      id: 12,
      systemId: '2',
      tableId: '6',
      workflowId: '0',
      name: 'Arrival Number'
    },
    {
      id: 13,
      systemId: '2',
      tableId: '6',
      workflowId: '0',
      name: 'Bill of Lading Number'
    },
    {
      id: 14,
      systemId: '2',
      tableId: '6',
      workflowId: '0',
      name: 'Reception Date'
    },
    {
      id: 15,
      systemId: '2',
      tableId: '6',
      workflowId: '0',
      name: 'Order Number'
    },
    {
      id: 16,
      systemId: '1',
      tableId: '6',
      workflowId: '0',
      name: 'Reference Number'
    },
    {
      id: 17,
      systemId: '1',
      tableId: '2',
      workflowId: '0',
      name: 'Work Order Number'
    },
    {
      id: 18,
      systemId: '2',
      tableId: '4',
      workflowId: '0',
      name: 'Transporter Number'
    },
    {
      id: 19,
      systemId: '1',
      tableId: '1',
      workflowId: '0',
      name: 'Delivery Number'
    },
    {
      id: 20,
      systemId: '3',
      tableId: '7',
      workflowId: '0',
      name: 'Mine Lot Number'
    },
    {
      id: 21,
      systemId: '3',
      tableId: '7',
      workflowId: '0',
      name: 'Sales Order'
    },
    {
      id: 22,
      systemId: '3',
      tableId: '7',
      workflowId: '0',
      name: 'Material Code'
    },
    {
      id: 23,
      systemId: '3',
      tableId: '7',
      workflowId: '0',
      name: 'Mine Origin'
    },
    {
      id: 24,
      systemId: '3',
      tableId: '7',
      workflowId: '0',
      name: 'Dry Weight At Mine'
    },
    {
      id: 25,
      systemId: '3',
      tableId: '7',
      workflowId: '0',
      name: 'Wet Weight At Mine'
    },
    {
      id: 26,
      systemId: '3',
      tableId: '7',
      workflowId: '0',
      name: 'Moisture At Mine'
    },
    {
      id: 27,
      systemId: '3',
      tableId: '8',
      workflowId: '0',
      name: 'Sales Order'
    },
    {
      id: 28,
      systemId: '3',
      tableId: '8',
      workflowId: '0',
      name: 'Concentrate Origin'
    },
    {
      id: 29,
      systemId: '3',
      tableId: '8',
      workflowId: '0',
      name: 'Vehicle License Plate'
    },
    {
      id: 30,
      systemId: '3',
      tableId: '8',
      workflowId: '0',
      name: 'Travel Document Number'
    },
    {
      id: 31,
      systemId: '3',
      tableId: '8',
      workflowId: '0',
      name: 'Transport Company Name'
    },
    {
      id: 32,
      systemId: '4',
      tableId: '9',
      workflowId: '0',
      name: 'Travel Document Number'
    },
    {
      id: 33,
      systemId: '4',
      tableId: '9',
      workflowId: '0',
      name: 'Truck License Plate'
    },
    {
      id: 34,
      systemId: '4',
      tableId: '9',
      workflowId: '0',
      name: 'Gross Weigt'
    },
    {
      id: 35,
      systemId: '4',
      tableId: '9',
      workflowId: '0',
      name: 'Wet Weight'
    },
    {
      id: 36,
      systemId: '4',
      tableId: '9',
      workflowId: '0',
      name: 'Moisture'
    },
    {
      id: 37,
      systemId: '4',
      tableId: '9',
      workflowId: '0',
      name: 'Lot Number'
    },
    {
      id: 38,
      systemId: '5',
      tableId: '10',
      workflowId: '0',
      name: 'Combine Purchase Order'
    }
  ],
  roles: [
    {
      id: 1,
      name: 'User',
      description: '',
      permissions: '',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
    {
      id: 2,
      name: 'Admin',
      description: '',
      permissions: '',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
    {
      id: 3,
      name: 'Manager',
      description: '',
      permissions: '',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
  ],
  models: [
    {
      id: 1,
      name: 'User'
    },
    {
      id: 2,
      name: 'Product',
    },
    {
      id: 3,
      name: 'PurchaseOrder'
    },
    {
      id: 4,
      name: 'PurchaseOrderComments'
    }
  ],
  permissions: [
    {
      id: 1,
      roleId: '1',
      object: 'User',
      action: 'Create, Update, Delete'
    },
    {
      id: 2,
      roleId: '2',
      object: 'Product',
      action: 'Create, Update, Delete'
    },
    {
      id: 3,
      roleId: '3',
      object: 'PurchaseOrder',
      action: 'Create, Update, Delete'
    },
  ],
  workflowAutomations: [
    {
      id: 1,
      title: 'Workflow Automation A',
      description: 'Description of Project',
      calculationSteps: '',
      dataFilterSteps: '',
      jobSchedule: '',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
    {
      id: 2,
      title: 'Workflow Automation B',
      description: 'Felis imperdiet proin fermentum leo vel orci porta non pulvinar. ',
      calculationSteps: '',
      dataFilterSteps: '',
      jobSchedule: '',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  ],
  workflowIntegration: [{
      id: 1,
      templateId: 1,
      title: 'Invoice Acceptance',
      description: 'Automated Purchase Order Acceptance & Exception Handling',
      tags: 'Purchase Order, Invoice',
      state: 'new',
      prerequisite:[{
          stepNumber: 1,
          title: 'Initial Contract Information',
          description: 'Information about the initial contract that will be used to tie the information together',
          forms: [{
            title: 'Sales Document Type',
            model: 'salesDocumentType',
            fields: {
              system: '',
              table: '',
              field: '',
              files: []
            }
          },{
            title: 'Currency',
            model: 'currency',
            fields: {
              system: '',
              table: '',
              field: '',
              files: []
            }
          }]
        },{
          stepNumber: 2,
          title: ' Supply Plan Information',
          description: 'Information about the supply plan',
          forms: [{
            title: 'Supply Plan',
            model: 'supplyPlan',
            fields: {
              system: '',
              table: '',
              field: '',
              files: []
            }
          }]
        }
      ],
      triggerOpts: [{
        id: '1',
        text: 'Status data is over min/max value',
        model: 'SimpleInput'
      },{
        id: '2',
        text: 'Status data matches value',
        model: 'SimpleInput'
      },{
        id: '3',
        text: 'Status data contains value',
        model: 'SimpleInput'
      },{
        id: '4',
        text: 'Monitor details (per product type)',
        model: 'ProductInput'
      }],
      triggers: [{
        stepNumber: '3',
        title: ' Monitor WIP Data',
        description: 'Monitor \'Work in progress\' data for the following conditions',
        forms: {}
      }],
      actionOpts: [{
        title: 'Update information on customer SAP',
        description: '',
        model: 'CustomerSap',
      },{
        title: 'Update information on customer SAP (Exception Handling)',
        description: '',
        model: 'CustomerSapErrorHandling'
      }, {
        title: 'Send Email',
        description: '',
        model: 'SendEmail'
      }, {
        title: 'Error Handling',
        description: '',
        model: 'ErrorHandling'
      }],
      actions: [{}],
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
    {
      id: 2,
      templateId: 1,
      title: 'WIP Cycle Time',
      description: 'WIP Cycle Time monitor & alerts',
      tags: 'WIP Cycle Time, Supply Plan, Initial Contract',
      state: 'new',
      prerequisite:[{
          stepNumber: 1,
          title: 'Initial Contract Information',
          description: 'Information about the initial contract that will be used to tie the information together',
          forms: [{
            title: 'Sales Document Type',
            model: 'salesDocumentType',
            fields: {
              system: '',
              table: '',
              field: '',
              files: []
            }
          },{
            title: 'Currency',
            model: 'currency',
            fields: {
              system: '',
              table: '',
              field: '',
              files: []
            }
          }]
        },{
          stepNumber: 2,
          title: ' Supply Plan Information',
          description: 'Information about the supply plan',
          forms: [{
            title: 'Supply Plan',
            model: 'supplyPlan',
            fields: {
              system: '',
              table: '',
              field: '',
              files: []
            }
          }]
        }
      ],
      triggerOpts: [{
        id: '1',
        text: 'Status data is over min/max value',
        model: 'SimpleInput'
      },{
        id: '2',
        text: 'Status data matches value',
        model: 'SimpleInput'
      },{
        id: '3',
        text: 'Status data contains value',
        model: 'SimpleInput'
      },{
        id: '4',
        text: 'Monitor details (per product type)',
        model: 'ProductInput'
      }],
      triggers: [{
        stepNumber: '3',
        title: ' Monitor WIP Data',
        description: 'Monitor \'Work in progress\' data for the following conditions',
        forms: {}
      }],
      actionOpts: [{
        title: 'Update information on customer SAP',
        description: '',
        model: 'CustomerSap',
      },{
        title: 'Update information on customer SAP (Exception Handling)',
        description: '',
        model: 'CustomerSapErrorHandling'
      }, {
        title: 'Send Email',
        description: '',
        model: 'SendEmail'
      }, {
        title: 'Error Handling',
        description: '',
        model: 'ErrorHandling'
      }],
      actions: [{}],
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
    {
      id: 3,
      templateId: 1,
      title: 'Security Stock Monitoring',
      description: 'Monitor product stock',
      tags: 'Product Stock, Supply Plan, Alerts',
      state: 'new',
      prerequisite:[{
        stepNumber: 1,
        title: 'Initial Contract Information',
        description: 'Information about the initial contract that will be used to tie the information together',
        forms: [{
          title: 'Sales Document Type',
          model: 'salesDocumentType',
          fields: {
            system: '',
            table: '',
            field: '',
            files: []
          }
        },{
          title: 'Currency',
          model: 'currency',
          fields: {
            system: '',
            table: '',
            field: '',
            files: []
          }
        }]
      },{
        stepNumber: 2,
        title: ' Supply Plan Information',
        description: 'Information about the supply plan',
        forms: [{
          title: 'Supply Plan',
          model: 'supplyPlan',
          fields: {
            system: '',
            table: '',
            field: '',
            files: []
          }
        }]
      }
      ],
      triggerOpts: [{
        id: '1',
        text: 'Status data is over min/max value',
        model: 'SimpleInput'
      },{
        id: '2',
        text: 'Status data matches value',
        model: 'SimpleInput'
      },{
        id: '3',
        text: 'Status data contains value',
        model: 'SimpleInput'
      },{
        id: '4',
        text: 'Monitor details (per product type)',
        model: 'ProductInput'
      }],
      triggers: [{
        stepNumber: '3',
        title: ' Monitor WIP Data',
        description: 'Monitor \'Work in progress\' data for the following conditions',
        forms: {}
      }],
      actionOpts: [{
        title: 'Update information on customer SAP',
        description: '',
        model: 'CustomerSap',
      },{
        title: 'Update information on customer SAP (Exception Handling)',
        description: '',
        model: 'CustomerSapErrorHandling'
      }, {
        title: 'Send Email',
        description: '',
        model: 'SendEmail'
      }, {
        title: 'Error Handling',
        description: '',
        model: 'ErrorHandling'
      }],
      actions: [{}],
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },
    {
      id: 4,
      templateId: 1,
      title: 'Invoice Final Acceptance',
      description: 'Automated Purchase Order Acceptance & Exception Handling',
      tags: 'Purchase Order, Invoice',
      state: 'post-config',
      prerequisite: [
        {
          stepNumber: 1,
          title: 'Initial Contract Information',
          description: 'Information about the initial contract that will be used to tie the information together',
          forms: [
            {
              title: 'Sales Document Type',
              model: 'salesDocumentType',
              fields: {
                system: {
                  id: '1',
                  systemId: '1',
                  name: 'VA01',
                  systemName: 'SAP Daher',
                  systemTable: 'SAP Daher.VA01'
                },
                table: 'Products',
                field: 'ProductId',
                files: [
                  {
                    data: '',
                    name: 'pipelineLog-556.txt',
                    size: '1649441',
                    type: 'text/plain',
                    createdBy: 'Mock User',
                    createdAt: 'August 17 2020, 3:04 pm',
                    updatedAt: 'August 17 2020, 3:04 pm'
                  }
                ]
              }
            },
            {
              title: 'Currency',
              model: 'currency',
              fields: {
                system: {
                  id: '1',
                  systemId: '1',
                  name: 'VA01',
                  systemName: 'SAP Daher',
                  systemTable: 'SAP Daher.VA01'
                },
                table: 'Products',
                field: 'LineItemId',
                files: []
              }
            }
          ],
          auditTrail: [
            {
              jobId: '1', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            },
            {
              jobId: '2', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            }
          ]
        },
        {
          stepNumber: 2,
          title: ' Supply Plan Information',
          description: 'Information about the supply plan',
          forms: [
            {
              title: 'Supply Plan',
              model: 'supplyPlan',
              fields: {
                system: {
                  id: '3',
                  systemId: '1',
                  name: 'MIGO',
                  systemName: 'SAP Daher',
                  systemTable: 'SAP Daher.MIGO'
                },
                table: 'Systems',
                field: 'DocumentId',
                files: [
                  {
                    data: '',
                    name: 'pipelineLog-556.txt',
                    size: '1649441',
                    type: 'text/plain',
                    createdBy: 'Mock User',
                    createdAt: 'August 17 2020, 3:04 pm',
                    updatedAt: 'August 17 2020, 3:04 pm'
                  }
                ]
              }
            }
          ],
          auditTrail: [
            {
              jobId: '1', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            },
            {
              jobId: '2', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            }
          ]
        }
      ],
      triggerOpts: [
        {
          id: '1',
          text: 'Status data is over min/max value',
          model: 'SimpleInput',
          values: '2400'
        },
        {
          id: '2',
          text: 'Status data matches value',
          model: 'SimpleInput'
        },
        {
          id: '3',
          text: 'Status data contains value',
          model: 'SimpleInput'
        },
        {
          id: '4',
          text: 'Monitor details (per product type)',
          model: 'ProductInput'
        }
      ],
      triggers: [
        {
          stepNumber: '3',
          title: ' Monitor WIP Data',
          description: 'Monitor \'Work in progress\' data for the following conditions',
          forms: {
            id: '1',
            text: 'Status data is over min/max value',
            model: 'SimpleInput',
            values: '2400'
          },
          auditTrail: [
            {
              jobId: '1', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            },
            {
              jobId: '2', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            }
          ]
        }
      ],
      actionOpts: [
        {
          title: 'Update information on customer SAP',
          description: '',
          model: 'CustomerSap'
        },
        {
          title: 'Update information on customer SAP (Exception Handling)',
          description: '',
          model: 'CustomerSapErrorHandling'
        },
        {
          title: 'Send Email',
          description: '',
          model: 'SendEmail'
        },
        {
          title: 'Error Handling',
          description: '',
          model: 'ErrorHandling'
        }
      ],
      actions: [
        {
          stepNumber: '4',
          title: 'Update information on customer SAP',
          description: '',
          forms: {
            model: 'CustomerSap',
            fields: {
              documentType: 'MIGO (Delivery Note)',
              destinationType: 'MigoId',
              system: {
                id: '3',
                systemId: '1',
                name: 'MIGO',
                systemName: 'SAP Daher',
                systemTable: 'SAP Daher.MIGO'
              },
              table: 'Migos',
              field: 'ItemId'
            }
          },
          auditTrail: [
            {
              jobId: '1', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            },
            {
              jobId: '2', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            }
          ]
         
        },
        {
          stepNumber: '5',
          title: 'Send Email',
          description: '',
          forms: {
            model: 'SendEmail',
            fields: {
              body: 'Testing Email Body',
              recipients: [
                'test@test.com'
              ]
            }
          },
          auditTrail: [
            {
              jobId: '1', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            },
            {
              jobId: '2', //jobId
              status: 'In Progress',
              date: faker.date.recent(),
              sourceSystem: 'Impala',
              targetSystem: 'asdadsd',
              payload: {
                loremIpsum1: 'value',
                loremIpsum2: 'value',
                loremIpsum3: 'value',
              },
            }
          ]
        }
      ]
    }
  ],
  workflowTemplate: [{
    id: 1,
    title: 'Workflow Template',
    description: 'Proin interdum odio massa, a hendrerit massa dictum nec. Suspendisse vel blandit orci. Quisque velit urna, congue ac fermentum ac, varius eu leo. Nulla facilisi. Aenean nisl ligula, bibendum id tincidunt id, fermentum ut turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum rutrum ultricies nibh, eget lobortis nisi placerat quis.',
    dataRequired: [{
        title: 'Item Title',
        description: 'Item Description Goes Here'
      },
      {
        title: 'Invoice',
        description: 'Invoice Information from Supplier'
      },
      {
        title: 'Manufacturing Data',
        description: 'WIP Stages, statuses, and cycle from supplier'
      },
      {
        title: 'Delivery Notes/Goods Reception',
        description: 'Delivery Notes and Goods Reception by Customer'
      },
      {
        title: 'Security Stock',
        description: 'Security Stock information by Customer'
    }],
    workflowAlerts: [{
        title: 'Item Title',
        description: 'Item Description Goes Here'
      },
      {
        title: 'On-Time Delivery Tracking',
        description: 'Precise On-time delivery alerts and automated actions'
      },
      {
        title: 'Security Stock Monitoring',
        description: 'Min/max security stock monitoring based on productID'
      },
      {
        title: 'WIP Cycle Time',
        description: 'WIP cycle time alerts and automated actions'
    }],
    KPIs: [{
       title: 'Item Title',
       description: 'Item Description Goes Here'
     },
     {
       title: 'Purchase Order acceptance rate',
       description: 'Measure purchase-order acceptance rate by supplies'
     },
     {
       title: 'WIP Cycle time by per stage',
       description: 'WIP cycle time broken down into stages and product ID'
     },
     {
       title: 'Security Stock',
       description: 'View lastest number for each product available in security stock'
    }],
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  }],
  jitterbitJobs: [{
    jobId: '1',
    workflowIntegrationId: '4',
    triggeredDate: faker.date.recent(),
    status: 'In Progress'
  },
  {
    jobId: '2',
    workflowIntegrationId: '4',
    triggeredDate: faker.date.recent(),
    status: 'Completed'
  },
  {
    jobId: '3',
    workflowIntegrationId: '4',
    triggeredDate: faker.date.recent(),
    status: 'Not Started'
  }]
}