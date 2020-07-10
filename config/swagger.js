module.exports = {

  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Galaxia lejana',
    description: 'User management API',
    termsOfService: 'http://api_url/terms/',
    contact: {
      name: 'Nicolas Coco',
      email: 'ncoco@fi.uba.ar'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  servers:
      [
        {
          url: 'http://localhost:8080/',
          description: 'Local server'
        },
        {
          url: 'https://api_url_testing',
          description: 'Testing server'
        },
        {
          url: 'https://api_url_production',
          description: 'Production server'
        }
      ],


  tags: [
    {
      name: 'ABM COCO'
    },
  ],
  paths: {
    '/clima': {
      get: {
        tags: ['ABM COCO', 'ABM LANAS'],
        description: 'Obtener clima para un dia "n"',
        operationId: 'getClimas',
        parameters: [
          {
            name: 'dia',
            in: 'query',
            schema: {
              type: 'integer',
              default: 1
            },
            required: true
          },
        ],
        responses: {
          '200': {
            description: 'El clima fue obtenido',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Clima'
                },
              }
            }
          },
          '400': {
            description: 'El dia ingresado es invalido',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'companyId is missing',
                  internal_code: 'missing_parameters'
                }
              }
            }
          }
        }
      }
    },
    '/reporte': {
      get: {
        tags: ['ABM COCO', 'ABM LANAS'],
        description: 'Reporte de los 10 años ',
        operationId: 'reporte',
        parameters: [],// No necesita
        responses: {
          '200': {
            description: 'El clima fue obtenido',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Reporte'
                }
              }
            }
          },
          '400': {
            description: 'El dia ingresado es invalido',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Clima: {
        type: 'object', properties: {
          dia: {
            type: 'string', description: 'numero del dia consultado',
            example: '25'
          },
          clima: {
            type: 'string', description: 'como se encontro las condiciones climaticas de este dia',
            example: 'Normal'
          }
        }
      },
      Reporte: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Item'
        },
      },
      Item: {
        type: 'object',
        properties: {
          cantidadDeDiasSequia: {
            type: 'integer',
            description: 'numero de dias en los que se presencio sequia en la galaxia',
            example: 120
          }
          ,
          cantidadDeDiasLluvia: {
            type: 'integer',
            description: 'numero de dias en los que se presencio lluvias en la galaxia',
            example: 155
          }
          ,
          picoMaximoLluvia: {
            type: 'float',
            description: 'milimetros cubicos maximos en la peor tormenta en la galaxia',
            example: 120
          }
          ,
          picoMaximoLluviaDia: {
            type: 'integer',
            description: 'numero del dia que más llovio en los 10 años en la galaxia',
            example: 160
          }
          ,
          cantidadDeDiasCondicionesOptimas: {
            type: 'integer',
            description: 'numero de dias en los que se presencio condicones optimas en la galaxia',
            example: 3
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string', description: 'Indica el motivo del error',
            example: 'El dia ingresado es invalido ...'
          }
        }
      }
    }
  }
}