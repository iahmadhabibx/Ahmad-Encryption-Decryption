# ahmadEncryptionDecryption

### This method works on 7 length base e-n-c-r-y-p-t, d-e-c-r-y-p-t which makes 7 in length ###

ENCRYPTION STEPS
1 - Generates 7 length random alphanumeric string and add on start<br/>
2 - Check the length of string and increase ASCII of character by 7 of EVEN characters.
2 - Check the length of string and decrease ASCII of character by 7 of ODD characters.
3 - It see if decreased ASCII code is less than 32. If yes then it continues from 255 (ie 34->33->32->255).
4 - It see if increased ASCII code is greater than 255. If yes then it continues from 33 (ie 254->255->32).
5 - Generates 7 length random alphanumeric string and add at end.
6 - If character exceed 255 then it will resumes from 32 as for SPACE
7 - If character goes below 32 it will resume from 255

DECRYPTION STEPS
1 - Remove first 7 strings.
2 - Remove last 7 strings.
3 - Check the length of string and increase ASCII of character by 7 of ODD characters.
4 - Check the length of string and decrease ASCII of character by 7 of EVEN characters.
5 - If character exceed 255 then it will resumes from 32 as for SPACE
6 - If character goes below 32 it will resume from 255
