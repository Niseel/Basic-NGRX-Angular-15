Với Angular mình có thể call api từ component nhờ có httpClient đúng không?
Như vậy thì low level quá, CRY
--> Để dùng chung ta dùng service

nhưng Service cũng k ổn, đó là 1 chỗ để mn quăng 1 đống hàm, thuộc tính rồi lại lăpj lại mà chả giải quyết đc gì.


--> ngRx sinh ra để khiến cái đám này hoạt động cùng nhau 1 cách hiệu quả
We are getting all our data in a single Global place with which we can always see and debug with ease->

Nhìn qua diagram

an action will change a state and reducer and store === global state?

and whenever global state change then all our component who are subscribed to this state will be notified about this state change

So that mean
NGRX just global object where we have all our data and tracking state



Effect k xuất hiện/ cần thiết trong các hành động NGRX đồng bộ mà nó là 1 thư viện lẻ

Nó sinh ra để làm mấy cái API call


CreateEffect Tạo ra 1 cái listener để hóng action
