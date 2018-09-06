# Pelion-JSSDK-test-subscription

## Prerequisite

Run the firmware of [Quick Connect](https://cloud.mbed.com/quick-start) on your target board. Get your device ID (Endpoint Name, at the last line in the example output below).

```
Starting Simple Mbed Cloud Client example
Connecting to the network using Ethernet...
Connected to the network successfully. IP address: 10.128.4.85
[Simple Cloud Client] Autoformatting the storage.
[Simple Cloud Client] Reset storage to an empty state.
[Simple Cloud Client] Starting developer flow
Initialized Mbed Cloud Client. Registering...
Connected to Mbed Cloud. Endpoint Name: 0165885edb66000000000001001002ef
```

## Setup Application

`$ git clone https://github.com/coisme/Pelion-NodeJS-Test-1.git`

`$ cd Pelion-NodeJS-Test-1`

`$ npm install`

Set your API key and device ID (Endpoint Name) in `index.js`.

## Run

`$ node index.js`

Sample Output:
```
$ node index.js
To close the app, type "quit" + ENTER
12:03:09 asyncId={}
12:03:12 btnCnt=13793
12:03:17 btnCnt=13794
12:03:22 btnCnt=13795
12:03:27 btnCnt=13796
12:03:32 btnCnt=13797
12:03:37 btnCnt=13798
12:03:42 btnCnt=13799
12:03:47 btnCnt=13800
12:03:52 btnCnt=13801
12:03:57 btnCnt=13802
12:04:02 btnCnt=13803
12:04:07 btnCnt=13804
12:04:12 btnCnt=13805
12:04:17 btnCnt=13806
12:04:22 btnCnt=13807
12:04:27 btnCnt=13808
12:04:32 btnCnt=13809
12:04:37 btnCnt=13810
12:04:42 btnCnt=13811
12:04:47 btnCnt=13812
12:04:52 btnCnt=13813
12:04:57 btnCnt=13814
12:05:02 btnCnt=13815
12:05:07 btnCnt=13816
12:05:12 btnCnt=13817
12:05:17 btnCnt=13818
12:05:22 btnCnt=13819
12:05:27 btnCnt=13820
12:05:32 btnCnt=13821
12:05:37 btnCnt=13822
12:05:42 btnCnt=13823
12:05:47 btnCnt=13824
12:05:52 btnCnt=13825
12:05:57 btnCnt=13826
12:06:02 btnCnt=13827
12:06:07 btnCnt=13828
12:06:12 btnCnt=13829
12:06:17 btnCnt=13830
12:06:22 btnCnt=13831
12:06:27 btnCnt=13832
12:06:32 btnCnt=13833
12:06:37 btnCnt=13834
12:06:42 btnCnt=13835
12:06:47 btnCnt=13836
12:06:52 btnCnt=13837
quit
Deleting subscription...
bye.
$
```
