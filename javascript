Here in this series I am going to tell different concepts of JavaScript (JS) starting with one of important topics of JS

Promise During University Placements you gone for company interview but hurriedly to reach there by mistake you forgot your resume. Your turn is next . Luckily your your flatmate still in house so you called him to find the resume and come to give it He promise reply you back. There are two outcome to this situation either he find resume (task is successful or resolve ✅) or sadly he calls he can't find it (results in failure or reject ❌). But time is passing by and flatmate is not messaging but interviewer was kind enough to let it pass and continue the interview marking resume submission as still pending

So in JS terms a promise is asynchronous meaning it takes time to resolve. In mean time JS doesn't wait for resolving of one event it mark it as pending waiting for returning value and run rest part of the code 👨‍💻. In this case you are waiting for your friend call for the result. Just like that in promise we use callback function (promise handler) to return the results. To specify which callback to call we use to two callbacks function using nested then()method