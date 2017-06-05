
# Warm Up
ab -c 5 -n 50 http://localhost/sleep?sleep=100 >null

echo Actual Execution
ab -c 50 -n 1000 http://localhost/sleep?sleep=100
