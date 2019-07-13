import React, { Component } from 'react';
import NavigationSelector from './NavigationSelector';

const data = [
  { 
    "company info": {
      name: "Aisly Rose",
      description_1: "Young Contemporary",
      address: "149 Catalina St",
      phone: '1232143243',
      email: "john@gmail.com",
      description_2: "blah blah blah"    
    },
    FAQ: [
      {
        header: "Account",
        content: "1 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        header: "Member Center",
        content: "2 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        header: "Order",
        content: "3 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Order Status",
        content: "4 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        header: "Payment",
        content: "5 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Shipping",
        content: "6 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Return & Exchanges",
        content: "7 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Refunds",
        content: "8 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      }
    ],
    "Show Schedule": [
      {
        name: "Atlanta Americasmart1",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart2",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart3",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart4",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart5",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart6",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
    ],
    "Return & Cancellation Policy": {
      policy: " policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Promotion": {
      promotion: "promotio Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Size Info": {
      "size info": "size Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  }

]

export default class App extends Component {
  constructor() {
    super();

  }
  render() {
    return(
      <>
        <NavigationSelector data={data}/>
      </>
    )
  }
}

