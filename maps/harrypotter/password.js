var password;

var pass1="I solemnly swear that I am up to no good.";
var pass2="I solemnly swear that I am up to no good";
var pass3="isolemnlyswearthatiamuptonogood";
var pass4="IsolemnlyswearthatIamuptonogood";
var pass6="i solemnly swear that i am up to no good";

password=prompt('STATE YOUR BUSINESS! If you are suspected to be a muggle you will be redirected to mugglenews.com','');

if (password==pass1 || password==pass2 || password==pass3 || password==pass4 || password==pass6)
  alert("Messrs. Moony, Wormtail, Padfoot, and Prongs Purveyors of Aids to Magical Mischief-Makers are proud to present THE MARAUDER'S MAP");
else
   {
    window.location="http://www.huffingtonpost.com/2014/07/16/signs-youre-a-muggle-in-denial_n_5565026.html";
    }