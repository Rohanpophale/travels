import React from 'react'
import { Link } from 'react-router-dom'
import GooglePayButton from '@google-pay/button-react'

export default function Payment() {
  return (
    <>
      <div className="card" style={{ "width": "18rem", "margin": "200px auto" }}>
        <div className="card-body">
          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Maya Tours and Travels',
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '45000',
                currencyCode: 'INR',
                countryCode: 'IN',
              },
              shippingAddressRequired: true,
              callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
            }}
            onLoadPaymentData={paymentRequest => {
              console.log('Success', paymentRequest);
            }}
            onPaymentAuthorized={paymentData => {
              console.log('Payment Authorised Success', paymentData)
              return { transactionState: 'SUCCESS' }
            }
            }
            onPaymentDataChanged={paymentData => {
              console.log('On Payment Data Changed', paymentData)
              return {}
            }
            }
            existingPaymentMethodRequired='false'
            buttonColor='black'
            buttonType='Buy'
          />


          <Link to="/destinations" className="btn btn-danger" style={{ "marginLeft": "-5px" }}>Go Back</Link>
        </div>
      </div>
    </>
  )
}
