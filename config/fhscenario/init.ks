*start
@delay t=10
# Init Cookies
@getCookie k="preloguePlayed"
@requestCookie

# Init languauge
@call s=langinit
# Trigger Definition start
# Prologue
@if exp="1-prelogue"
@eval var=prelogue exp=1
@startAct c=chapter1 a=act1 s=prelogue
@endif
# Act 2 Tutorial
@if exp="1-chapter1act2"
@waitQuestComplete s=chapter1_act2_title q=4E2B2FEBD5031A2C
@endif


# Trigger Definition End
# Do Not Modify Below
@waitPlayerStart l=*st
@wa
*st
@startSystem
@s