// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
// 입출력 예 설명
// 입출력 예 설명 #1

// num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.
// 입출력 예 설명 #2

// num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.
// 입출력 예 설명 #3

// num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.

int solution(int num1, int num2) {
    if(num1 == num2){
         return +1;
     }else{
         return -1;
     }
 }

 num1과 num2를 비교하여 같다면 return값에 +1 을해주고 아니라면 return값에 -1을해준다

 삼항연산으로 푼다면

 int solution(int num1, int num2) {
    return (num1 == num2) ? +1 : -1;
 }