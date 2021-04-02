# L.I.N.K-Digital-Wallet-by-React-Native
The based version is by https://www.youtube.com/watch?v=rcXyN_cfGY8 and I added up some modifications and new screens.

# What I have changed and added?
1. Login Screen
2. Area Code SearchBar
3. Home Screen Banner's Horizontal Scrolling
4. Changed the bottom right button to ReceivedCode screen
5. Added the payment methods: 
  a. Transfered by phone number (submitting the phone number form will redirect to a payment screen)
  b. Transfered by barcode (a qrcode page to be scanned or by phone number)
  
# What I failed to do?
1. The fonts cannot be loaded properly so I just used the system font instead.
2. The random qr code generator (react-native-qrcode-svg) cannot be installed in my npm environment so that cannot generate a random qrcode for the payment and receive page.
3. Backend stuff (Too many things to do so I postponed it first)

# How to use?
You can git clone the project then install expo cli & npm in your directory, then run "npm install".
Then you can run either "npm start" or "expo start"

# Noted!!!!!!
I only tested on IOS simulator by XCode and IPad Air 3, so there might be some rendering problem on Android Phone.
