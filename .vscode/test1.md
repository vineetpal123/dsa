
// rate limiter 
// customer 

// rate limit based on user_id and per user 100 request per minute .


### RateLimititerConfig = {
    limit : 100;
    window : 1 min
}
# LRU

## validateRequest : check rate limit

## steps 
# get rate limiter config 
# get user counter from redis, if less than config limit  else throw error
# increase counter and save in redis , along with user_id
# allow request 
#
# for new window counter will set to 0 in redis for that user (new time frame)
# redis will save 

# 1_startTime : 5 
# 1_2: 0


1) concurrency 
2) 
 

