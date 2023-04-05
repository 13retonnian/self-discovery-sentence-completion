//Programmed by Christopher Barber January 24th 2022
//declare buttons
const howToUseButton = document.querySelector(".how-button");
const introductoryButton = document.querySelector(".introductory-button");
// Parental
const parentalButton = document.querySelector(".parental-button");
const beginningButton = document.querySelector(".beginning-button");
const motherButton = document.querySelector(".mother-button");
const fatherButton = document.querySelector(".father-button");
const anotherPerspectiveButton = document.querySelector(".another-perspective-button");
const parentalTopics = document.querySelector(".parental-topics");
// Child - Teenage Button
const childTeenageButton = document.querySelector(".child-teenage-button");
const childButton = document.querySelector(".child-button");
const teenageButton = document.querySelector(".teenage-button");
const integrationButton = document.querySelector(".integration-button")
// Negative Feelings
const negativeButton = document.querySelector(".negative-button");
const painButton = document.querySelector(".pain-button");
const angerButton = document.querySelector(".anger-button");
const fearButton = document.querySelector(".fear-button");
const envyButton = document.querySelector(".envy-button");
//
const positiveButton = document.querySelector(".positive-button");
const sexualityButton = document.querySelector(".sexuality-button");
const selfEsteemButton = document.querySelector(".self-esteem-button");
const sageSelfButton = document.querySelector(".sage-self-button");
const nextButton = document.querySelector(".next-button");
const saveButton = document.querySelector(".save-button");
const startButton = document.querySelector(".start-button");
const startButtonA = document.querySelector(".start-button-a");
const startButtonB = document.querySelector(".start-button-b");
const startButtonC = document.querySelector(".start-button-c");
const pauseButton = document.querySelector(".pause-button");
//other
const howParagraph = document.querySelector("#HowToUseParagraph");
const homeButton = document.querySelector(".home-button");
const topics = document.querySelector(".topics");
const textArea = document.querySelector(".input-box");
const headerHTML = document.querySelector(".Header");
const frontPageHeader = document.getElementById("FrontPageHeader");
const stem = document.querySelector(".Stem");
const quickInstructions = document.querySelector(".quick-instructions");
const timerHTML = document.querySelector(".timer");
const resultsHTML = document.querySelector(".results");
const resultsHeader = document.querySelector(".results-header");
const savedIndicator = document.querySelector(".saved-indicator");
//constants
const NUMBER_OF_STEMS = 48;
const NUMBER_OF_INTRODUCTORY_STEMS = 6;
// Parental
const NUMBER_OF_BEGINNING_STEMS = 6;
const NUMBER_OF_MOTHER_STEMS = 6;
// Child-Teenage
const NUMBER_OF_CHILD_TEENAGE_STEMS = 6;
const NUMBER_OF_NEGATIVE_STEMS = 6;
const NUMBER_OF_POSITIVE_STEMS = 6;
const NUMBER_OF_SEXUALITY_STEMS = 6;
const NUMBER_OF_SELF_ESTEEM_STEMS = 6;
const NUMBER_OF_SAGE_SELF_STEMS = 6;
// Headers
let noBoxHeader;
const FRONT_PAGE_HEADER = "Choose a pillar:";
const QUICK_INSTRUCTION_HEADER = "Quickly write as many endings to this sentence stem as you can before the timer runs out, or click next.";
const RESULTS_HEADER = "Here are your results:";
const INTRODUCTORY_HEADER = `The stems in this section are provided to give you the opportunity to become familiar and comfortable with the process of sentence completion work. <br><br> 
Beyond that, your endings may generate some fresh insights into <i>who you are</i>. <br><br>
And remember, you are doing this for yourself. <br><br>
If you do the exercises honestly, you will be the beneficiary. <br><br>
If you don't, you will be the one who suffers the loss of an opportunity. <br><br>`;
//parental
const BEGINNING_HEADER = `In pursuing a course of self-discovery, it is appropriate to go back to a time we remember only dimly, but which undeniably has relevance to the person we are today. <br><br> 
I am speaking of childhood. <br><br>`;
const MOTHER_HEADER = `In exploring the role of parental influence on subsequent development, the purpose here is not to blame but to understand. <br><br>
We are interested in Father and Mother as they exist in your mind (or fantasies), which may or may not bear a close relationship to reality. <br><br>`;
const FATHER_HEADER = `And we are interested in how your memories or beliefs about your Mother and Father might affect your life today. <br><br>
In the subconscious there is only a timeless present where yesterday and today are one. <br><br>`;
const ANOTHER_PERSPECTIVE = `Sometimes we are locked into one way of looking at our parents and cannot conceive of an alternative. <br><br> 
We are often stuck in the perspective of the child or teenager. <br><br>
We do not think of our parents in the light of our adult consciousness. <br><br>
Therefore we do not see them in fully human, realistic terms. <br><br>
The stems that follow aim at facilitating this switch of perspective - toward a greater maturity. <br><br>`
const PARENTAL_HEADER = `In pursuing a course of self-discovery, it is appropriate to go back to a time we may remember only dimly, but which undeniably has relevance to the person we are today. <br><br>
I am speaking of childhood. <br><br>
In exploring the role of parental influence on subsequent development, the purpose here is not to blame but to understand. <br><br>
We are interested in Mother and Father as they exist in your mind (or fantasies), which may or may not bear a close relationship to reality. <br><br>
And we are interested in how your memories or beliefs about your mother and father might affect your life today. <br><br>
In your subconscious there is only a timeless present where yesterday and today are one. <br><br>
`;
//child/teenage
const CHILD_TEENAGE_HEADER = `Once upon a time each one of us was a child, and perhaps we don't realize that we carry that child within us, as an aspect of who we are. <br><br>
Sometimes all of us shift into the state of consciousness of the child we once were and respond to situations in our adult lives as if (for all practical purposes) we were still that child, with his or her values, perspective, and distinctive way of processing experience. <br><br>
Sometimes this can be desirable, for example when we experience the child's spontaneity and playfulness. <br><br>
Sometimes it is undesirable- when we reactivate that child's insecurities, dependency, and limited grasp of the world. <br><br>`;
const CHILD_HEADER = `We can make friends with that child, allowing him or her to feel welcome within us. <br><br>
Or we can disown the child, making ourselves unconscious to their existence. <br><br>
In this case the child typically proceeds to wreak havoc with our lives in ways that we are unlikely to recognize: <br><br>
making it impossible for us to have a happy love life, leading us to inappropriate behavior at work, denying us the freedom of adult forms of playful enjoyment, and so forth. <br><br>
Recognized and integrated, these selves represent magnificent resources that can enrich our lives. <br><br>
Left unrecognized, not understood, ignored, or disowned, these selves can turn into \"demons\" that obstruct our evolution as well as our enjoyment of existence. <br><br>`;
const TEENAGE_HEADER = `What would happen if you accepted that you really do have a teenage-self. What would happen if you befriended him or her? <br><br>
Became a nurturer of this part of you? Are you able to have compassion for his or her struggles? <br><br>
Can you offer the friendship and understanding that perhaps no adult ever did? <br><br>`;
const INTEGRATION_HEADER = `This is an opportunity to tap into and articulate the implicit understadings building in your psyche as a consequence of the work you have been doing here. <br><br>
 Do not try to "reason" about it. Work as swiftly as you can, as "intuitively" as you can. <br><br>
 Remember - we generally know far more than we think we know. <br><br>`;
// Negative Feelings
const NEGATIVE_HEADER = `Our feelings and emotions reflect the significance that different aspects of reality have for us. <br><br>
As such, they embody <i>value judgements</i> - super-rapid appraisals of "for me" or "against me," "beneficial" or "harmful," based on the way we percieve and interpret the particular facts (or thoughts) to which we are responding. <br><br>
Here we will be concerned with understanding how different feelings and emotions arise, and what we typically do about them and, in some cases, what we might learn to do differently and better. <br><br>
`;
const PAIN_HEADER = `If you are tempted to cry to yourself, "But what can I <i>do</i> about feelings and emotions that hurt?" my answer is, "Breathe deeply and experience them." <br><br>
Hear what they are trying to tell you. <br><br>
Learn from them. <br><br>
Allow them to have their voice. <br><br>
In experiencing them fully, you will learn to let go of them. <br><br>
It will happen naturally. <br><br>
Trust yourself. <br><br>
As to why and how this process works, as to why and how (as someone said) "the way out is through," I refer you to <i>Honoring The Self</i> <br><br>`;
const ANGER_HEADER = `When we were children, anger, especially anger against our parents, was usually the forbidden emotion. <br><br>
"If I were to show my mother my anger, she would not love me. If I were to show my father my anger, he would kill me." <br><br>
So often, at a conscious or subconscious level, the expression of anger is associated either with loss of love or with terrifying retaliation. <br><br>
Further, many of us were taught that good people are never angry; resentment, we were encouraged to believe, points only to our own deficiencies. <br><br>
Our self-esteem may have become tied to being "above" anger or resentment.`;
const FEAR_HEADER = `You might be surprised by some of the realizations that are coming to you by now. <br><br>
Allow understanding to happen. <br><br>
Allow insights to surface. <br><br>
Realize that at a subconscious level the process of change has already begun. <br><br>`;
const ENVY_HEADER = `Take time to look back over the road you have traveled in this section. <br><br>
You have come a long way. <br><br>
You have a long way to go. <br><br>
Rest, review and meditate on what you have written and contemplate on what new possibilities might be available to you with regard to the understanding and handling of emotions. <br><br>`;
// Positive
const POSITIVE_HEADER = `The practice of living purposefully is the fifth pillar of self-esteem. <br><br>
To live purposefully is to use our powers for the attainment of goals we have selected. <br><br>
It is our goals that lead us forward, that call on the exercise of our faculties, that energize our existence. <br><br>
To live purposefully is to live productively which is a necessity of making ourselves competent to life. <br><br>
To live purposefully is to be concerned with these questions: <br><br>
What am I trying to achieve? <br><br>
How am I trying to achieve it? <br><br>
Why do I think these means are appropriate? <br><br>
Does the feedback from the environment convey that I am succeeding or failing? <br><br>
Is there new information that I need to consider? <br><br>
Do I need to make adjustments in my course, strategy or practices? <br><br>`;
const SEXUALITY_HEADER = `The practice of personal integrity is the sixth pillar of self-esteem. <br><br>
Integrity is the integration of ideals, convictions, standards, beliefs and behavior. <br><br>
When our behavior is congruent with our professed values, when ideals and practice match, we have integrity. <br><br>
When we behave in ways that conflict with our judgement of what is appropriate we lose face in our eyes. <br><br>
Personal integrity entails questions such as: <br><br>
"Am I honest, reliable and trustworthy?" <br><br>
"Do I keep my promises?" <br><br>
"Do I do the things I say I admire and do I avoid the things I say I deplore?" <br><br>
"Am I fair and just in my dealings with others?" <br><br>
Most of the issues of integrity we face are not big issues but small ones, yet the accumulated weight of our choices has an impact on our sense of self. <br><br>
Once we see that living up to our standards appears to be leading us towards self-destruction, the time has come to question our standards. <br><br>
Lies do not work. <br><br>`;
const SELF_ESTEEM_HEADER = "";
const SAGE_SELF_HEADER = "";
// Sentence Stems
//initialize stems
let stem1;
let stem2;
let stem3;
let stem4;
let stem5;
let stem6;
// Introductory 
const INTRODUCTORY_STEM_1 = "As I look back over my life...";
const INTRODUCTORY_STEM_2 = "Ever since I was a child...";
const INTRODUCTORY_STEM_3 = "As a teenager, I...";
const INTRODUCTORY_STEM_4 = "As I ask myself \"Who am I?\" I answer...";
const INTRODUCTORY_STEM_5 = "Sometimes I give people the impression that I...";
const INTRODUCTORY_STEM_6 = "Sometimes I make it difficult for people to understand me when I...";
// PARENTAL 
// - Beginning
// - Mother
// - Father
// - Another Perspective
const BEGINNING_STEM_1 = "As a child, I...";
const BEGINNING_STEM_2 = "One of the ways I felt different from other children was...";
const BEGINNING_STEM_3 = "One of my happiest early memories concerns...";
const BEGINNING_STEM_4 = "One of my unhappiest early memories concerns...";
const BEGINNING_STEM_5 = "As a child, it seemed to me that Mother was always...";
const BEGINNING_STEM_6 = "As a child, it seemed to me that Father was always...";
// Mother A
const MOTHER_STEM_A_1 = "As a child, it seemed to me Mother rarely...";
const MOTHER_STEM_A_2 = "As a teenager, it seemed to me that Mother was always...";
const MOTHER_STEM_A_3 = "As a teenager, it seemed to me that Mother rarely...";
const MOTHER_STEM_A_4 = "As a child, with Mother I felt...";
const MOTHER_STEM_A_5 = "As a teenager, with Mother I felt...";
const MOTHER_STEM_A_6 = "One of the things I wanted from Mother and couldn't seem to get was...";
// Mother B
const MOTHER_STEM_B_1 = "Mother gave me a view of myself as...";
const MOTHER_STEM_B_2 = "Mother speaks through my voice when I tell myself...";
const MOTHER_STEM_B_3 = "When Mother touched me, I felt...";
const MOTHER_STEM_B_4 = "When Mother saw that I was happy or excited, she...";
const MOTHER_STEM_B_5 = "When Mother saw that I was frightened, she...";
const MOTHER_STEM_B_6 = "When Mother saw that I was sad or hurting, she...";
// Mother C
const MOTHER_STEM_C_1 = "One of the implicit messages I got from Mother was...";
const MOTHER_STEM_C_2 = "One of the things I've done to win Mother's love is...";
const MOTHER_STEM_C_3 = "When I think of the things I've done to protect my relationship with my Mother, I...";
const MOTHER_STEM_C_4 = "Today, if Mother saw me in a happy love relationship...";
const MOTHER_STEM_C_5 = "Today, if Mother saw me achieving something of importance with my life...";
const MOTHER_STEM_C_6 = "When I think of Mother's influence on my life...";
// Father A
const FATHER_STEM_A_1 = "As a child, it seemed to me that Father rarely...";
const FATHER_STEM_A_2 = "As a teenager, it seemed to me that Father always...";
const FATHER_STEM_A_3 = "As a teenager, it seemed to me that Father rarely...";
const FATHER_STEM_A_4 = "As a child, with Father I felt...";
const FATHER_STEM_A_5 = "As a teenager, with Father I felt...";
const FATHER_STEM_A_6 = "One of the things I wanted from Father and couldn't seem to get was...";
// Father B
const FATHER_STEM_B_1 = "Father gave me a view of myself as...";
const FATHER_STEM_B_2 = "Father speaks through my voice when I tell myself...";
const FATHER_STEM_B_3 = "When Father touched me, I felt...";
const FATHER_STEM_B_4 = "When Father saw that I was happy or excited, he...";
const FATHER_STEM_B_5 = "When Father saw that I was frightened, he...";
const FATHER_STEM_B_6 = "When Father saw that I was sad or hurting, he...";
// Father C
const FATHER_STEM_C_1 = "One of the implicit messages I got from Father was...";
const FATHER_STEM_C_2 = "One of the things I've done to win Father's love is...";
const FATHER_STEM_C_3 = "When I think of the things I've done to protect my relationship with Father, I...";
const FATHER_STEM_C_4 = "Today, if Father saw me in a happy love relationship...";
const FATHER_STEM_C_5 = "Today, if Father saw me achieving something of importance with my life...";
const FATHER_STEM_C_6 = "When I think of Father's influence on my life...";
// Another Perspective
const ANOTHER_PERSPECTIVE_STEM_1 = "If I think of my mother as she must have been at the age of five...";
const ANOTHER_PERSPECTIVE_STEM_2 = "If I think of my mother as she must have been as a young woman...";
const ANOTHER_PERSPECTIVE_STEM_3 = "If I think of my father as he must have been at the age of five...";
const ANOTHER_PERSPECTIVE_STEM_4 = "If I think of my father as he must have been as a young man...";
const ANOTHER_PERSPECTIVE_STEM_5 = "If it ever turns out I don't need my parents' permission to be happy...";
const ANOTHER_PERSPECTIVE_STEM_6 = "If it ever turns out I don't need my parents' permission to be successful...";
// CHILD_TEENAGE 
// - Child
// - Teenager
// - Integration
const CHILD_STEM_A_1 = "When I was five years old...";
const CHILD_STEM_A_2 = "When I was ten years old...";
const CHILD_STEM_A_3 = "When I was very young, the world seemed...";
const CHILD_STEM_A_4 = "When I was very young, people seemed...";
const CHILD_STEM_A_5 = "When I was very young, life seemed...";
const CHILD_STEM_A_6 = "If the child in me could speak, he/she might say...";
// Child B
const CHILD_STEM_B_1 = "One of the ways I treat my child-self as my mother did is...";
const CHILD_STEM_B_2 = "One of the ways I treat my child-self as my father did is...";
const CHILD_STEM_B_3 = "When the child within feels ignored by me...";
const CHILD_STEM_B_4 = "When the child within feels criticized by me...";
const CHILD_STEM_B_5 = "One of the ways that child gets me into trouble is...";
const CHILD_STEM_B_6 = "If that child were to feel fully accepted by me...";
// Child C
const CHILD_STEM_C_1 = "Sometimes, the hard thing about fully accepting the child with is...";
const CHILD_STEM_C_2 = "I would be kinder to the child within if I were to...";
const CHILD_STEM_C_3 = "If I were to listen to the things that child needs to tell me...";
const CHILD_STEM_C_4 = "If I fully accept that child as a valuable part of me...";
const CHILD_STEM_C_5 = "I am becoming aware...";
const CHILD_STEM_C_6 = "When I look at myself from this perspective...";
// Teenager A
const TEENAGE_STEM_A_1 = "When I became a teenager...";
const TEENAGE_STEM_A_2 = "When I was fourteen years old...";
const TEENAGE_STEM_A_3 = "When I was sixteen years old...";
const TEENAGE_STEM_A_4 = "When I entered high school, I felt...";
const TEENAGE_STEM_A_5 = "With my teenage friends, I felt...";
const TEENAGE_STEM_A_6 = "With the opposite sex, I felt...";
// Teenage B
const TEENAGE_STEM_B_1 = "When I was eighteen years old...";
const TEENAGE_STEM_B_2 = "If the teenager with could speak, he/she might say...";
const TEENAGE_STEM_B_3 = "One of the ways I treat my teenage-self the way my mother did is...";
const TEENAGE_STEM_B_4 = "One of the ways I treat my teenage-self the way my father did is...";
const TEENAGE_STEM_B_5 = "When the teenager within feels ignored by me...";
const TEENAGE_STEM_B_6 = "When the teenager within feels criticized by me...";
// Teenage C
const TEENAGE_STEM_C_1 = "One of the ways my teenage-self sometimes gets me in trouble is...";
const TEENAGE_STEM_C_2 = "If my teenage-self felt listened to a respected by me...";
const TEENAGE_STEM_C_3 = "If my teenage-self felt I had compassion for his/her struggles...";
const TEENAGE_STEM_C_4 = "If I were responsive to the teenager's needs...";
const TEENAGE_STEM_C_5 = "One of the ways my teenage-self could contribute to my life is...";
const TEENAGE_STEM_C_6 = "One of the things I appreciate about my teenage self is...";
// Integrations
const INTEGRATION_STEM_1 = "If it turns out that my child-self is an invaluable resource...";
const INTEGRATION_STEM_2 = "If it turns out that my teenage-self is an invaluable resource...";
const INTEGRATION_STEM_3 = "As I learn to accept these parts of myself...";
const INTEGRATION_STEM_4 = "As I think of giving my younger selves what they need from me...";
const INTEGRATION_STEM_5 = "As my younger selves learn to feel they can trust me...";
const INTEGRATION_STEM_6 = "As I allow myself to feel compassionate toward my younger selves...";
// NEGATIVE 
// - Pain
// - Anger
// - Fear
// - Envy and Jealousy
const PAIN_STEM_A_1 = "I can remember feeling hurt when...";
const PAIN_STEM_A_2 = "Sometimes, today, I feel hurt when...";
const PAIN_STEM_A_3 = "Sometimes, when I am hurt, I...";
const PAIN_STEM_A_4 = "Sometimes I try to hide my hurt by...";
const PAIN_STEM_A_5 = "One of the disguised ways my hurt comes out is...";
const PAIN_STEM_A_6 = "If I were more accepting of my feelings of hurt...";
// Pain B
const PAIN_STEM_B_1 = "If I were willing to be more honest about my feelings of hurt...";
const PAIN_STEM_B_2 = "Sometimes the frightening thing about admitting my hurt is...";
const PAIN_STEM_B_3 = "If I were willing to breathe deeply and fully experience my hurt...";
const PAIN_STEM_B_4 = "I am becoming aware...";
const PAIN_STEM_B_5 = "Right now it seems clear that..";
const PAIN_STEM_B_6 = "If I allow myself to understand what I have been writing...";
// Anger A
const ANGER_STEM_A_1 = "I can remember feeling angry when..";
const ANGER_STEM_A_2 = "Sometimes, today, I feel angry when...";
const ANGER_STEM_A_3 = "Sometimes, when I am angry, I...";
const ANGER_STEM_A_4 = "Sometimes I try to hide my anger by...";
const ANGER_STEM_A_5 = "One of the disguised ways my anger comes out is...";
const ANGER_STEM_A_6 = "A better way to deal with my anger might be to...";
// Anger B
const ANGER_STEM_B_1 = "If I were more accepting of my feelings of anger...";
const ANGER_STEM_B_2 = "If I were willing to express my anger honestly and with dignity...";
const ANGER_STEM_B_3 = "Sometimes the frightening thing about showing my anger is...";
const ANGER_STEM_B_4 = "If I were willing to breathe deeply and take responsibility for my anger...";
const ANGER_STEM_B_5 = "I am beginning to suspect...";
const ANGER_STEM_B_6 = "Right now it seems obvious that...";
// Fear A
const FEAR_STEM_A_1 = "I can remember feeling afraid when...";
const FEAR_STEM_A_2 = "Sometimes, today, I feel afraid when...";
const FEAR_STEM_A_3 = "Sometimes, when I feel afraid, I...";
const FEAR_STEM_A_4 = "Sometimes I try to hide feeling afraid by...";
const FEAR_STEM_A_5 = "One of the disguised ways my fear comes out is...";
const FEAR_STEM_A_6 = "A better way to deal with my fear might be to...";
// Fear B
const FEAR_STEM_B_1 = "If I were more accepting of my feelings of fear...";
const FEAR_STEM_B_2 = "If I were more straightforward about handling my fear...";
const FEAR_STEM_B_3 = "Sometimes the difficult thing about letting people see that I am frightened is...";
const FEAR_STEM_B_4 = "If I were willing to breathe deeply and experience my fear fully...";
const FEAR_STEM_B_5 = "If I allow myself to understand what I have been writing...";
const FEAR_STEM_B_6 = "If my subsconscious has been learning more than I yet know...";
// Envy A
const ENVY_STEM_1 = "If I were to feel envy or jealousy, it would be when...";
const ENVY_STEM_2 = "If I were to feel envy or jealousy, I would probably...";
const ENVY_STEM_3 = "If I were to feel envy or jealousy, I might tell myself...";
const ENVY_STEM_4 = "If I were to be honest with myself about any feelings of envy or jealousy...";
const ENVY_STEM_5 = "A good way to deal with feels of envy and jealousy might be to...";
const ENVY_STEM_6 = "As I learn to take responsibility for my feelings...";
// POSITIVE 
// - Happiness
// - Love
// - Feeling Loved
// - Excitement
const POSITIVE_STEM_1 = "Living purposefully to me means...";
const POSITIVE_STEM_2 = "If I bring 5 percent more purposefulness to my life today...";
const POSITIVE_STEM_3 = "If I am 5 percent more purposeful in my communications...";
const POSITIVE_STEM_4 = "If I bring 5 percent more purposefulness to my relationships...";
const POSITIVE_STEM_5 = "If I am 5 percent more purposeful about my deepest yearnings...";
const POSITIVE_STEM_6 = "If I took more responsibility for fulfilling my wants...";
// SEXUALITY 
// - Sexuality
// - Parental Influences
// - Opposie Sex
// - Sex and Spirit
const SEXUALITY_STEM_1 = "Integrity to me means...";
const SEXUALITY_STEM_2 = "If I bring 5 percent more integrity into my life...";
const SEXUALITY_STEM_3 = "If I think about the areas where I find it difficult to practice full integrity...";
const SEXUALITY_STEM_4 = "If I bring a higher level of consciousness to the areas where I find it difficult to practice full integrity...";
const SEXUALITY_STEM_5 = "If I remain loyal to the values that I truly believe are right...";
const SEXUALITY_STEM_6 = "If I treat my self-esteem as a high priority...";
// Self-Esteem
// - Early Messages
// - Behaviors
// - Self-Sabotage
// - Waking Up
// - Self-Acceptance
const SELF_ESTEEM_STEM_1 = "";
const SELF_ESTEEM_STEM_2 = "";
const SELF_ESTEEM_STEM_3 = "";
const SELF_ESTEEM_STEM_4 = "";
const SELF_ESTEEM_STEM_5 = "";
const SELF_ESTEEM_STEM_6 = "";
// Sage-Self
// - Higher Self
// - Triumph of Self-Esteem
const SAGE_SELF_STEM_1 = "";
const SAGE_SELF_STEM_2 = "";
const SAGE_SELF_STEM_3 = "";
const SAGE_SELF_STEM_4 = "";
const SAGE_SELF_STEM_5 = "";
const SAGE_SELF_STEM_6 = "";
// Initialize Global Variables
let leaf1;
let leaf2;
let leaf3;
let leaf4;
let leaf5;
let leaf6;
let HTMLresults;
let localFileResults;
let countDownTimer;
let timeLeft = 60;
let topicState = "initial";
let pillarIndex = 1;
let timerPlayStatus = true;
const loadStems = function(firstStem, secondStem, thirdStem, fourthStem, fifthStem, sixthStem) {
	stem1 = firstStem;
	stem2 = secondStem;
	stem3 = thirdStem;
	stem4 = fourthStem;
	stem5 = fifthStem;
	stem6 = sixthStem;
}
const initializeMoreStartPage = function () {
	clearPage();
	headerHTML.style.display = "block";
	startButton.style.display = "block";
	homeButton.style.display = "block";
}
const initializeTwoStartButtons = function() {
	headerHTML.style.display = "block";
	homeButton.style.display = "block";
	startButtonA.style.display = "block";
	startButtonB.style.display = "block";
}
const initializeThreeStartButtons = function() {	
	headerHTML.style.display = "block";
	homeButton.style.display = "block";
	startButtonA.style.display = "block";
	startButtonB.style.display = "block";
	startButtonC.style.display = "block";
}
const initializeIntroductory = function() {	
	topicState = "introductory";
	loadStems(INTRODUCTORY_STEM_1, INTRODUCTORY_STEM_2, INTRODUCTORY_STEM_3, INTRODUCTORY_STEM_4, INTRODUCTORY_STEM_5, INTRODUCTORY_STEM_6);
	headerHTML.innerHTML = INTRODUCTORY_HEADER;
	initializeMoreStartPage();
}
// Parental
const initializeParental = function() {	
	topicState = "parental";	
	clearPage();
	homeButton.style.display = "block";
	headerHTML.style.display = "block";
	headerHTML.innerHTML = PARENTAL_HEADER;
	beginningButton.style.display = "block";
	motherButton.style.display = "block";
	fatherButton.style.display = "block";
	anotherPerspectiveButton.style.display = "block";
}
const initializeBeginning = function() {
	topicState = "beginning";
	loadStems(BEGINNING_STEM_1, BEGINNING_STEM_2, BEGINNING_STEM_3, BEGINNING_STEM_4, BEGINNING_STEM_5, BEGINNING_STEM_6);
	headerHTML.innerHTML = BEGINNING_HEADER;	
	initializeMoreStartPage();
}
// Mother
const initializeMother = function() {
	topicState = "mother";
	clearPage();
	initializeThreeStartButtons();
	headerHTML.innerHTML = MOTHER_HEADER;		
}
const initializeFather = function() {
	topicState = "father";
	clearPage();
	initializeThreeStartButtons();	
	headerHTML.innerHTML = FATHER_HEADER;		
}
const initializeAnotherPerspective = function() {
	topicState = "another-perspective";
	loadStems(ANOTHER_PERSPECTIVE_STEM_1, ANOTHER_PERSPECTIVE_STEM_2, ANOTHER_PERSPECTIVE_STEM_3, ANOTHER_PERSPECTIVE_STEM_4, ANOTHER_PERSPECTIVE_STEM_5, ANOTHER_PERSPECTIVE_STEM_6);
	headerHTML.innerHTML = ANOTHER_PERSPECTIVE;
	initializeMoreStartPage();
}

// Child - Teenage Self
const initializeChildTeenage = function() {
	topicState = "child-teenage";
	clearPage();
	homeButton.style.display = "block";
	headerHTML.style.display = "block";
	childButton.style.display = "block";
	teenageButton.style.display = "block";
	integrationButton.style.display = "block";	
	headerHTML.innerHTML = CHILD_TEENAGE_HEADER;	
}
const initializeChild = function() {
	topicState = "child";
	clearPage();
	initializeThreeStartButtons();	
	headerHTML.innerHTML = CHILD_HEADER;
}
const initializeTeenage = function() {
	topicState = "teenage";
	clearPage();
	initializeThreeStartButtons();
	headerHTML.innerHTML = TEENAGE_HEADER;
}
const initializeIntegration = function() {
	topicState = "integration";
	loadStems(INTEGRATION_STEM_1, INTEGRATION_STEM_2, INTEGRATION_STEM_3, INTEGRATION_STEM_4, INTEGRATION_STEM_5, INTEGRATION_STEM_6);
	headerHTML.innerHTML = INTEGRATION_HEADER;
	initializeMoreStartPage();
}
// Negative Feelings
const initializeNegative = function() {
	topicState = "negative";
	clearPage();
	homeButton.style.display = "block";
	headerHTML.style.display = "block";
	painButton.style.display = "block";
	angerButton.style.display = "block";
	fearButton.style.display = "block";
	envyButton.style.display = "block";
	headerHTML.innerHTML = NEGATIVE_HEADER;	
}
const initializePain = function() {
	topicState = "pain";
	clearPage();
	initializeTwoStartButtons();
	headerHTML.innerHTML = PAIN_HEADER;
}
const initializeAnger = function() {
	topicState = "anger";
	clearPage();
	initializeTwoStartButtons();
	headerHTML.innerHTML = ANGER_HEADER;
}
const initializeFear = function() {
	topicState = "fear";
	clearPage();
	initializeTwoStartButtons();
	headerHTML.innerHTML = FEAR_HEADER;
}
const initializeEnvy = function() {
	topicState = "envy";
	initializeMoreStartPage();
	loadStems(ENVY_STEM_1, ENVY_STEM_2, ENVY_STEM_3, ENVY_STEM_4, ENVY_STEM_5, ENVY_STEM_6);
}
//
const initializePositive = function() {
	topicState = "positive";
	loadStems(POSITIVE_STEM_1, POSITIVE_STEM_2, POSITIVE_STEM_3, POSITIVE_STEM_4, POSITIVE_STEM_5, POSITIVE_STEM_6);
	headerHTML.innerHTML = POSITIVE_HEADER;
	initializeMoreStartPage();
}
const initializeSexuality = function() {
	topicState = "sexuality";
	loadStems(SEXUALITY_STEM_1, SEXUALITY_STEM_2, SEXUALITY_STEM_3, SEXUALITY_STEM_4, SEXUALITY_STEM_5, SEXUALITY_STEM_6);
	headerHTML.innerHTML = SEXUALITY_HEADER;
	initializeMoreStartPage();
}
const initializeSelfEsteem = function() {
	topicState = "self-esteem";
	loadStems(SELF_ESTEEM_STEM_1, SELF_ESTEEM_STEM_2, SELF_ESTEEM_STEM_3, SELF_ESTEEM_STEM_4, SELF_ESTEEM_STEM_5, SELF_ESTEEM_STEM_6);
	headerHTML.innerHTML = SELF_ESTEEM_HEADER;
	initializeMoreStartPage();
}
const initializeSageSelf = function() {
	topicState = "sage-self";
	loadStems(SAGE_SELF_STEM_1, SAGE_SELF_STEM_2, SAGE_SELF_STEM_3, SAGE_SELF_STEM_4, SAGE_SELF_STEM_5, SAGE_SELF_STEM_6);
	headerHTML.innerHTML = SAGE_SELF_HEADER;
	initializeMoreStartPage();
}
const clearPage = function() {
	howToUseButton.style.display = "none";
	howParagraph.style.display = "none";
	homeButton.style.display = "none";
	topics.style.display = "none";
	startButton.style.display = "none";
	startButtonA.style.display = "none";
	startButtonB.style.display = "none";
	startButtonC.style.display = "none";
	headerHTML.style.display = "none";
	frontPageHeader.style.display = "none";
	nextButton.style.display = "none";
	timerHTML.style.display = "none";
	quickInstructions.style.display = "none";
	textArea.style.display = "none";
	stem.style.display = "none";
	resultsHTML.style.display = "none";
	saveButton.style.display = "none";
	resultsHeader.style.display = "none";
	pauseButton.style.display = "none";
	beginningButton.style.display = "none";
	motherButton.style.display = "none";
	fatherButton.style.display = "none";
	anotherPerspectiveButton.style.display = "none";
	childButton.style.display = "none";
	teenageButton.style.display = "none";
	integrationButton.style.display = "none";
	painButton.style.display = "none";
	angerButton.style.display = "none";
	fearButton.style.display = "none";
	envyButton.style.display = "none";
}
const displayHowTo = function() {
	howParagraph.style.display = "block";
	homeButton.style.display = "block";
	topics.style.display = "none";
}
const displayHomePage = ()=>{
	howToUseButton.style.display = "block";
	topics.style.display = "flex";
	frontPageHeader.style.display = "block";
}
const startTimer = function() {
	clearInterval(countDownTimer);
	countDownTimer = setInterval(decreaseTime, 1000);
}
const stopTimer = function() {
	clearInterval(countDownTimer);
}
const decreaseTime = function () {
	timeLeft--;
	if(timeLeft < 0)
	{
		timeLeft = 60;
		nextStem();
	}
	timerHTML.innerHTML = timeLeft;
}
const displayInitialElements = function() {
	quickInstructions.style.display = "block";
	stem.style.display = "block";	
	textArea.style.display = "block";
	nextButton.style.display = "block";
	timerHTML.style.display = "block";
	pauseButton.style.display = "block";
}
const startExercise = function() {
	clearPage();
	displayInitialElements();	
	changeStem();	
	startTimer();
	scrollTo(0,0);
}
const startExerciseA = function() {	
	if(topicState === "mother")	{
		loadStems(MOTHER_STEM_A_1, MOTHER_STEM_A_2, MOTHER_STEM_A_3, MOTHER_STEM_A_4, MOTHER_STEM_A_5, MOTHER_STEM_A_6);
	}
	else if(topicState === "father") {
		loadStems(FATHER_STEM_A_1, FATHER_STEM_A_2, FATHER_STEM_A_3, FATHER_STEM_A_4, FATHER_STEM_A_5, FATHER_STEM_A_6);
	}
	else if(topicState === "child") {
		loadStems(CHILD_STEM_A_1, CHILD_STEM_A_2, CHILD_STEM_A_3, CHILD_STEM_A_4, CHILD_STEM_A_5, CHILD_STEM_A_6);
	}
	else if(topicState === "teenage") {
		loadStems(TEENAGE_STEM_A_1, TEENAGE_STEM_A_2, TEENAGE_STEM_A_3, TEENAGE_STEM_A_3, TEENAGE_STEM_A_4, TEENAGE_STEM_A_5, TEENAGE_STEM_A_6);
	}
	else if(topicState === "pain") {
		loadStems(PAIN_STEM_A_1, PAIN_STEM_A_2, PAIN_STEM_A_3, PAIN_STEM_A_4, PAIN_STEM_A_5, PAIN_STEM_A_6);
	}
	else if(topicState === "anger") {
		loadStems(ANGER_STEM_A_1, ANGER_STEM_A_2, ANGER_STEM_A_3, ANGER_STEM_A_4, ANGER_STEM_A_5, ANGER_STEM_A_6);
	}
	else if(topicState === "fear") {
		loadStems(FEAR_STEM_A_1, FEAR_STEM_A_2, FEAR_STEM_A_3, FEAR_STEM_A_4, FEAR_STEM_A_5, FEAR_STEM_A_6);
	}		
	startExercise();
}
const startExerciseB = function() {	
	if(topicState === "mother")	{
		loadStems(MOTHER_STEM_B_1, MOTHER_STEM_B_2, MOTHER_STEM_B_3, MOTHER_STEM_B_4, MOTHER_STEM_B_5, MOTHER_STEM_B_6);
	}
	else if(topicState === "father") {
		loadStems(FATHER_STEM_B_1, FATHER_STEM_B_2, FATHER_STEM_B_3, FATHER_STEM_B_4, FATHER_STEM_B_5, FATHER_STEM_B_6);
	}
	else if(topicState === "child") {
		loadStems(CHILD_STEM_B_1, CHILD_STEM_B_2, CHILD_STEM_B_3, CHILD_STEM_B_4, CHILD_STEM_B_5, CHILD_STEM_B_6);
	}
	else if(topicState === "teenage") {
		loadStems(TEENAGE_STEM_B_1, TEENAGE_STEM_B_2, TEENAGE_STEM_B_3, TEENAGE_STEM_B_4, TEENAGE_STEM_B_5, TEENAGE_STEM_B_6);
	}
	else if(topicState === "pain") {
		loadStems(PAIN_STEM_A_1, PAIN_STEM_A_2, PAIN_STEM_A_3, PAIN_STEM_A_4, PAIN_STEM_A_5, PAIN_STEM_A_6);
	}
	else if(topicState === "anger") {
		loadStems(ANGER_STEM_A_1, ANGER_STEM_A_2, ANGER_STEM_A_3, ANGER_STEM_A_4, ANGER_STEM_A_5, ANGER_STEM_A_6);
	}
	else if(topicState === "fear") {
		loadStems(FEAR_STEM_A_1, FEAR_STEM_A_2, FEAR_STEM_A_3, FEAR_STEM_A_4, FEAR_STEM_A_5, FEAR_STEM_A_6);
	}	
	startExercise();
}
const startExerciseC = function() {
	if(topicState === "mother")	{
		loadStems(MOTHER_STEM_C_1, MOTHER_STEM_C_2, MOTHER_STEM_C_3, MOTHER_STEM_C_4, MOTHER_STEM_C_5, MOTHER_STEM_C_6);
	}
	else if(topicState === "father") {
		loadStems(FATHER_STEM_C_1, FATHER_STEM_C_2, FATHER_STEM_C_3, FATHER_STEM_C_4, FATHER_STEM_C_5, FATHER_STEM_C_6);
	}
	else if(topicState === "child") {
		loadStems(CHILD_STEM_C_1, CHILD_STEM_C_2, CHILD_STEM_C_3, CHILD_STEM_C_4, CHILD_STEM_C_5, CHILD_STEM_C_6);
	}
	else if(topicState === "teenage") {
		loadStems(TEENAGE_STEM_C_1, TEENAGE_STEM_C_2, TEENAGE_STEM_C_3, TEENAGE_STEM_C_4, TEENAGE_STEM_C_5, TEENAGE_STEM_C_6);
	}
	startExercise();
}
const changeStem = function() {	
	if(pillarIndex == 1)	{
		stem.innerHTML = stem1;
	}
	if(pillarIndex == 2)	{
		stem.innerHTML = stem2;		
	}
	if(pillarIndex == 3)	{
		stem.innerHTML = stem3;		
	}
	if(pillarIndex == 4)	{
		stem.innerHTML = stem4;		
	}
	if(pillarIndex == 5)	{
		stem.innerHTML = stem5;		
	}
	if(pillarIndex == 6)	{
		stem.innerHTML = stem6;		
	}	
}
const saveCurrentLeaf = function() {	
	if(pillarIndex == 1)	{
		leaf1 = textArea.value;
	}
	if(pillarIndex == 2)	{
		leaf2 = textArea.value;
	}
	if(pillarIndex == 3)	{
		leaf3 = textArea.value;
	}
	if(pillarIndex == 4)	{
		leaf4 = textArea.value;
	}
	if(pillarIndex == 5)	{
		leaf5 = textArea.value;
	}
	if(pillarIndex == 6)	{
		leaf6 = textArea.value;
	}	
}
const displayResults = function() {
	clearPage();
	localFileResults = `${stem1} \n\n ${leaf1} \n\n\n ${stem2} \n\n ${leaf2} \n\n\n ${stem3} \n\n ${leaf3} \n\n\n ${stem4} \n\n ${leaf4} \n\n\n ${stem5} \n\n ${leaf5} \n\n\n ${stem6} \n\n ${leaf6} \n\n\n`;
	HTMLresults = `<u>${stem1}</u> <br><br> ${leaf1} <br><br><br> <u>${stem2}</u> <br><br> ${leaf2} <br><br><br> <u>${stem3}</u> <br><br> ${leaf3} <br><br><br> <u>${stem4}</u> <br><br> ${leaf4} <br><br><br> <u>${stem5}</u> <br><br> ${leaf5} <br><br><br> <u>${stem6}</u> <br><br> ${leaf6} <br><br><br>`;
	resultsHTML.innerHTML = HTMLresults;
	resultsHTML.style.display = "block";
}
const resetValuesAtCompletion = function() {
	textArea.value = "";	
	timeLeft = 60;
	timerHTML.innerHTML = "60";
	pillarIndex = 1;	
}
const exerciseComplete = function() {
	saveCurrentLeaf();	
	stopTimer();	
	resetPauseButton();
	resetValuesAtCompletion();
	clearPage();
	displayResults();	
	topicState = "";
	homeButton.style.display = "block";
	saveButton.style.display = "block";
	resultsHeader.style.display = "block";
}
const goToNextStem = function() {
	saveCurrentLeaf();
	textArea.value = "";
	pillarIndex++;
	timeLeft = 60;
	timerHTML.innerHTML = "60";
	changeStem();		
}
function fadeOut(thing)
{	
	var i = 1;
	setInterval(fadeIt , 100);
	function fadeIt()
	{
		if (i > 0)
		{
			i -= 0.1;
			thing.style.opacity = i;
		}
		else
		{
			clearInterval();
		}
	}		
}
const displaySavedIndicator = function() {
	savedIndicator.style.display = "block";
	fadeOut(savedIndicator);
}
const resetPauseButton = function() {
	if(!timerPlayStatus)
	{
		timerPlayStatus = true;
		pauseButton.innerHTML = "Pause";
	}
}
const nextStem = function() {
	if(pillarIndex < 6)	{
		//stopping and starting timer makes it start again at exactly 60 seconds
		stopTimer();
		displaySavedIndicator();
		goToNextStem();	
		resetPauseButton();		
		startTimer();
		scrollTo(0,0);
	}
	else {
		exerciseComplete();		
	}
}
const saveResults = function() {	
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(localFileResults);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'results.txt';
	hiddenElement.click();
}
const handleHomeButton = function() {
	clearPage();
	displayHomePage();
	topicState = "";
}
const handleHowToUseButton = function() {
	clearPage();
	displayHowTo();
}
const toggleTimer = function() {
	if(timerPlayStatus)
	{ 
		stopTimer();
		timerPlayStatus = false;
		pauseButton.innerHTML = "Start";
	}
	else
	{
		startTimer();
		timerPlayStatus = true;
		pauseButton.innerHTML = "Pause";
	}	
}
howToUseButton.addEventListener("click", handleHowToUseButton);
homeButton.addEventListener("click", handleHomeButton);
introductoryButton.addEventListener("click", initializeIntroductory);
// Parental
parentalButton.addEventListener("click", initializeParental);
beginningButton.addEventListener("click", initializeBeginning);
motherButton.addEventListener("click", initializeMother);
fatherButton.addEventListener("click", initializeFather);
anotherPerspectiveButton.addEventListener("click", initializeAnotherPerspective);
// Child - Teenage Self
childTeenageButton.addEventListener("click", initializeChildTeenage);
childButton.addEventListener("click", initializeChild);
teenageButton.addEventListener("click", initializeTeenage);
integrationButton.addEventListener("click", initializeIntegration);
// Negative Feelings
negativeButton.addEventListener("click", initializeNegative);
painButton.addEventListener("click", initializePain);
angerButton.addEventListener("click", initializeAnger);
fearButton.addEventListener("click", initializeFear);
envyButton.addEventListener("click", initializeEnvy);

positiveButton.addEventListener("click", initializePositive);
sexualityButton.addEventListener("click", initializeSexuality);
selfEsteemButton.addEventListener("click", initializeSelfEsteem);
sageSelfButton.addEventListener("click", initializeSageSelf);
startButton.addEventListener("click", startExercise);
startButtonA.addEventListener("click", startExerciseA);
startButtonB.addEventListener("click", startExerciseB);
startButtonC.addEventListener("click", startExerciseC);
pauseButton.addEventListener("click", toggleTimer);
nextButton.addEventListener("click", nextStem);
saveButton.addEventListener("click", saveResults);

const handleInitialZoom = function() {
	document.body.style.zoom = "100%";	
}

window.onload = handleInitialZoom();