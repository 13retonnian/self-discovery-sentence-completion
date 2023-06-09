//Programmed by Christopher Barber January 24th 2022 - April 11th 2023
//declare buttons
const howToUseButton = document.querySelector(".how-button");
const introductoryButton = document.querySelector(".introductory-button");
// Parental
const parentalButton = document.querySelector(".parental-button");
const beginningButton = document.querySelector(".beginning-button");
const motherButton = document.querySelector(".mother-button");
const fatherButton = document.querySelector(".father-button");
const anotherPerspectiveButton = document.querySelector(".another-perspective-button");
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
// Positive Feelings
const positiveButton = document.querySelector(".positive-button");
const happinessButton = document.querySelector(".happiness-button");
const loveButton = document.querySelector(".love-button");
const feelingLovedButton = document.querySelector(".feeling-loved-button");
const excitementButton = document.querySelector(".excitement-button");
// Sexuality
const exploringSexualityButton = document.querySelector(".exploring-sexuality-button");
const sexualityButton = document.querySelector(".sexuality-button");
const parentalInfluencesButton = document.querySelector(".parental-influences-button");
const oppositeSexButton = document.querySelector(".opposite-sex-button");
const sexAndSpiritButton = document.querySelector(".sex-and-spirit-button");
// Self-Esteem
const selfEsteemButton = document.querySelector(".self-esteem-button");
const earlyMessagesButton = document.querySelector(".early-messages-button");
const behaviorsTASE_Button = document.querySelector(".behaviors-tase-button");
const selfSabotageButton = document.querySelector(".self-sabotage-button");
const wakingUpButton = document.querySelector(".waking-up-button");
const selfAcceptanceButton = document.querySelector(".self-acceptance-button");
// Sage Self
const sageSelfButton = document.querySelector(".sage-self-button");
const higherSelfButton = document.querySelector(".higher-self-button");
const triumphOfSE_Button = document.querySelector(".triumph-of-se-button");
// random
const randomButton = document.querySelector(".random-button");
//buttons
const nextButton = document.querySelector(".next-button");
const saveButton = document.querySelector(".save-button");
const startButton = document.querySelector(".start-button");
const startButtonA = document.querySelector(".start-button-a");
const startButtonB = document.querySelector(".start-button-b");
const startButtonC = document.querySelector(".start-button-c");
const startButtonD = document.querySelector(".start-button-d");
const startButtonE = document.querySelector(".start-button-e");
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
const NUMBER_OF_STEMS = 318;
// Headers
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
In your subconscious there is only a timeless present where yesterday and today are one. <br><br>`;
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
Here we will be concerned with understanding how different feelings and emotions arise, and what we typically do about them and, in some cases, what we might learn to do differently and better. <br><br>`;
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
const POSITIVE_HEADER = `When we think of "unwanted" emotions, or emotions we seek to avoid or suppress, the natural inclination is to think in terms of "negatives": pain, fear, rage, and the like. <br><br>
But the truth is that often it is positive emotional experience that we seek to suppress: excitement, love, sexuality. <br><br>`;
const HAPPINESS_HEADER = `Such emotions may threaten our equilibrium or our self-image. <br><br>
When we are afraid of intense feelings of <i>any</i> kind, it is often the very best within us that we try to bury. <br><br>`;
const LOVE_HEADER = `The tragedy of so many people's lives is that they are more concerned with avoiding hurt (or rejection) than with experiencing joy (or love). <br><br>
The avoidance of the negative matters more to them than the attainment of the positive. <br><br>
But of course such a policy makes pain and disappointment inevitable; they become sabateurs of their own happiness. <br><br>
Might any of this apply to you? <br><br>
Please reread your endings for this section. <br><br>`;
const FEELING_LOVED_HEADER = `What have you learned about your positive feelings? <br><br>
About your ability to love? <br><br>
About your ability to express the deepest, best part of who you are? <br><br>
Are you surprised by any of your responses? <br><br>
If so, take this opportunity to explore any ambivalence you have discovered toward your own positive feelings. <br><br>`;
const EXCITEMENT_HEADER = `"Excitement" can be about life, about a project, about another person, about yourself. <br><br>
The truth is that nothing is more precious or valuable than our own ability to experience excitement, since this ultimately means our ability to respond positively to the possibilities of life. <br><br>
No trait is more beautiful in a child - or more admirable in an old person. <br><br>
Our ability to experience excitement should be our most protected and nurtured possession. <br><br>`;
// Sexuality
const EXPLORING_SEXUALITY_HEADER = `Our sexuality is one of the most important things about us. <br><br>
By sexuality I mean not only our ability to experience sexual excitement, but how we feel about our sexual excitement, how we feel about the act of sex itself, and how we express ourselves in the act of sex. <br><br>
Who we are attracted to? What characteristics "turn us on"? <br><br>`;
const SEXUALITY_HEADER = `Do we feel pride or shame in our responses? <br><br>
Do we experience sex as an expression of our mind, values, and spirit - or do we see sex as belonging to some "lower order" of reality, unrelated to our mind or convictions? <br><br>`;
const PARENTAL_INFLUENCES_HEADER = `Long before we were influenced by movies or books or clandestine copies of dirty magazines, we already possess a notion of our own sexuality that reflects the attitudes of the sexually mature people closest to us. <br><br>
In most cases, these are our parents.`;
const OPPOSITE_SEX_HEADER = `Often we do violence to who we are because of misguided notions of "masculinity" and "femininity." <br><br>
We attempt to disown whatever does not fit our image of what is appropriate. <br><br>
Thus, men often disown tenderness, sensuality, their ability to be nurturing, just as women often disown strength, assertiveness, sexuality, their ability to be self-reliant. <br><br>`;
const SEX_AND_SPIRIT_HEADER = `What if it is self-delusion to imagine that our sex life bears little or no relation to the rest of who and what we are? <br><br>
And if we do learn to see sex as an act of self-expression, what follows? <br><br>`;
// Self Esteem
const SELF_ESTEEM_HEADER = `Positive self-esteem is our deepest psychological need. By \"self-esteem,\" I mean our experience of being competent to deal with the challenges of life and of being deserving of happiness. <br><br> 
I cannot think of a single major psychological problem - from fear of intimacy or of success, to underachievement at school or at work, to anxiety or depression, to alcohol abuse or drug addiction, to child molesting or spouse battering, to suicide or crimes of violence - that is traceable to a poor self-concept. <br><br>.
Of all the judgements we pass in life, none is as important as the one we pass on ourselves. <br><br>
Our self-concept tends to be our destiny. <br><br>`;
const EARLY_MESSAGES_HEADER = `In what ways do you feel your self-esteem was influenced by the messages you received from adults when you were little? <br><br>
How many of the things once told to you by your mother and father do you now tell yourself? <br><br>
And are they positive messages or negative? <br><br>
If your mother or father gave you destructive messages, are you now giving them to yourself? <br><br>
Or are you willing to challenge them? <br><br>`;
const BEHAVIORS_T_A_S_E_HEADER = `We may think of self-esteem as the experience that we are <i>competent</i> to live and <i>worthy</i> of happiness. <br><br>
The experience that I am competent to live means confidence in the functioning of my mind, in my ability to understand and judge the facts of reality within the sphere of mt interests and needs; intellectual self-trust; intellectual self-reliance. <br><br>
The experience that I am worthy of happiness means an affirmative attitude toward my right to a joyful existence; an affirmative attitude toward the assertion of my wants and needs; self-acceptance and self-respect; the feeling that happiness is my natural birthright. <br><br>`;
const SELF_SABOTAGE_HEADER = `We are often the saboteurs of our own happiness and stand in the way of our own fulfilment. <br><br>
We undermine our efforts for success in relationships. <br><br>
We do not realize how easy it is for us to stand in our own way. <br><br>
The purpose of these stems is to allow us to explore that territory. <br><br>`;
const WAKING_UP_HEADER = `What would change for you if you had the courage to honor your own excitement? <br><br>
To honor the life within you? <br><br>
What would change if you allowed old pains to fade into irrelevance? <br><br>
What do you imagine? <br><br>
What are your fantasies of how your future might be different? <br><br>`;
const SELF_ACCEPTANCE_HEADER = `Are you now willing to see what you see and know what you know? <br><br>
Are you willing to release the best within yourself? <br><br>
Are you willing to defy all the people who may have given you negative messages and assert your right to live and be happy? <br><br>
What strikes you as most important for your life right now? <br><br>`;
// Sage Self
const SAGE_SELF_HEADER = `In doing psychotherapy I find it useful to work with the concept of a sage-self (or higher self) - a part of our psyche that is much wiser than the rest of us, much more in contact with out deepest needs and best possibilities. <br><br>
It is a powerful metaphor, and perhaps a bit more than a metaphor. <br><br>`;
const HIGHER_SELF_HEADER = `All of us have known moments of extraordinary lucidity when ordinary limitations and constraints seem to fall away. <br><br>
We can look objectively at our lives, and experience what is truly important, with almost supernormal clarity. <br><br>
That perspective is the sage-self. <br><br>`;
const TRIUMPH_OF_SE_HEADER = `Understanding is power. <br><br>
Even if the facts we encounter initially are a bit frightening, we are at our strongest when we align ourselves with reality rather than when we seek to evade it. <br><br>
If we allow ourselves to let in what is true, fully experience it, and be willing to stand in its presence, new ideas, new possibilities, new solutions, and new directions begin to occur to us. <br><br>
Trues your own mind. <br><br>
Trust your own creativity. <br><br>
If you commit yourself to the work, doors will open. <br><br>`;
const RANDOM_HEADER = `You are competent to cope with the challenges of life and you are deserving of happiness. <br><br>
For this exercise six stems will be chosen randomly from the topics. <br><br>`;
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
const HAPPINESS_STEM_A_1 = `I can remember feeling happy when...`;
const HAPPINESS_STEM_A_2 = `Sometimes, today, I feel happy when...`;
const HAPPINESS_STEM_A_3 = `Sometimes, when I'm happy, I...`;
const HAPPINESS_STEM_A_4 = `Sometimes I try to to hide my happiness by...`;
const HAPPINESS_STEM_A_5 = `One of the disguised ways my happiness comes out is...`;
const HAPPINESS_STEM_A_6 = `If I were more accepting of my feelings of happiness..`;
// Happiness B
const HAPPINESS_STEM_B_1 = `If I were willing to let people see my joy...`;
const HAPPINESS_STEM_B_2 = `Sometimes, when I was younger, the frightening thing about letting people see my joy was...`;
const HAPPINESS_STEM_B_3 = `Sometimes, today, the frightening thing about letting people see my joy is...`;
const HAPPINESS_STEM_B_4 = `If I were to live more fully in the present...`;
const HAPPINESS_STEM_B_5 = `If I were to breathe deeply and feel my joy without restraint...`;
const HAPPINESS_STEM_B_6 = `I am becoming aware...`;
// Love A
const LOVE_STEM_A_1 = `I can remember feeling love when...`;
const LOVE_STEM_A_2 = `Sometimes, today, I feel love when...`;
const LOVE_STEM_A_3 = `Sometimes, when I feel love, I...`;
const LOVE_STEM_A_4 = `Sometimes, I try to hide my love by...`;
const LOVE_STEM_A_5 = `One of the disguised ways my love comes out is...`;
const LOVE_STEM_A_6 = `If I were more accepting of my feelings of love...`;
// Love B
const LOVE_STEM_B_1 = `If I were willing to express my love fully...`;
const LOVE_STEM_B_2 = `Sometimes, when I was younger, the frightening thing about fully expressing my love is...`;
const LOVE_STEM_B_3 = `If I were willing to breathe deeply and feel my love fully...`;
const LOVE_STEM_B_4 = `I am beginning to suspect...`;
const LOVE_STEM_B_5 = `Right now it seems obvious that...`;
const LOVE_STEM_B_6 = `If I allow myself to understand what I have been writing...`;
// Feeling Loved A
const FEELING_LOVED_STEM_A_1 = `I can remember feeling loved when...`;
const FEELING_LOVED_STEM_A_2 = `Sometimes, today, I feel loved when...`;
const FEELING_LOVED_STEM_A_3 = `Sometimes, when I feel loved, I...`;
const FEELING_LOVED_STEM_A_4 = `Sometimes I try to deny feeling loved by...`;
const FEELING_LOVED_STEM_A_5 = `If I were more accepting when I feel loved...`;
const FEELING_LOVED_STEM_A_6 = `If I were willing to let others see that I feel loved...`;
// Feeling loved B
const FEELING_LOVED_STEM_B_1 = `Sometimes the frightening thing about admitting I feel loved is...`;
const FEELING_LOVED_STEM_B_2 = `If I were willing to breathe deeply and let myself feel loved...`;
const FEELING_LOVED_STEM_B_3 = `I am becoming aware...`;
const FEELING_LOVED_STEM_B_4 = `I am beginning to suspect...`;
const FEELING_LOVED_STEM_B_5 = `I people knew how much love I have locked up inside of me...`;
const FEELING_LOVED_STEM_B_6 = `If I allow myself to understand what I have been writing...`;
// Excitement A
const EXCITEMENT_STEM_A_1 = `Sometimes I feel excited when...`;
const EXCITEMENT_STEM_A_2 = `Sometimes, when I feel excited, I...`;
const EXCITEMENT_STEM_A_3 = `Sometimes I try to hide my excitement by...`;
const EXCITEMENT_STEM_A_4 = `One of the disguised ways my excitement comes out is...`;
const EXCITEMENT_STEM_A_5 = `If I were more accepting of my feelings of excitement...`;
const EXCITEMENT_STEM_A_6 = `If I were willing to let people see my excitement...`;
// Excitement B
const EXCITEMENT_STEM_B_1 = `Sometimes, when I was younger, the frightening thing about showing my excitement is...`;
const EXCITEMENT_STEM_B_2 = `Sometimes, today, the frightening thing about showing my excitement is...`;
const EXCITEMENT_STEM_B_3 = `If I were willing to breathe deeply and fully experience my excitement...`;
const EXCITEMENT_STEM_B_4 = `I am becoming aware...`;
const EXCITEMENT_STEM_B_5 = `As more and more understanding happens at a subconscious level...`;
const EXCITEMENT_STEM_B_6 = `If, indeed, I am learning more than I yet recognize...`;
// SEXUALITY 
// - Sexuality
// - Parental Influences
// - Opposie Sex
// - Sex and Spirit
const SEXUALITY_STEM_1 = "Sometimes I feel sexually inspired (\"turned on\") when...";
const SEXUALITY_STEM_2 = "Sometimes, when I'm feeling sexual, I...";
const SEXUALITY_STEM_3 = "One of the ways I sometimes hide my sexual excitement is...";
const SEXUALITY_STEM_4 = "One of the ways my sexual excitement comes out is...";
const SEXUALITY_STEM_5 = "If I were fully comfortable with my sexuality...";
const SEXUALITY_STEM_6 = "If I were fully honest with myself about my sexual feelings...";
// parental influences A
const PARENTAL_INFLUENCES_STEM_A_1 = `A better way to deal with my sexuality might be to...`;
const PARENTAL_INFLUENCES_STEM_A_2 = `As a child, it seemed to me that Mother gave me the feeling my body was...`;
const PARENTAL_INFLUENCES_STEM_A_3 = `As a teenager, it seemed to me that Mother gave me the feeling my body was...`;
const PARENTAL_INFLUENCES_STEM_A_4 = `When I was growing up, Mother gave me the feeling that sex was...`;
const PARENTAL_INFLUENCES_STEM_A_5 = `Mother gave me the feeling that women are...`;
const PARENTAL_INFLUENCES_STEM_A_6 = `Mother gave me the feeling that men are...`;
// parental influences B
const PARENTAL_INFLUENCES_STEM_B_1 = `Mother gave me the feeling that love is...`;
const PARENTAL_INFLUENCES_STEM_B_2 = `As a child, it seemed to me that Father gave me the feeling my body was...`;
const PARENTAL_INFLUENCES_STEM_B_3 = `As a teenager, it seemed to me that Father gave me the feeling my body was...`;
const PARENTAL_INFLUENCES_STEM_B_4 = `When I was growing up, Father gave me the feeling that sex was...`;
const PARENTAL_INFLUENCES_STEM_B_5 = `Father gave me the feeling that women are...`;
const PARENTAL_INFLUENCES_STEM_B_6 = `Father gave me the feeling that men are...`;
// parental influences C
const PARENTAL_INFLUENCES_STEM_C_1 = `Father gave me the feeling that love is...`;
const PARENTAL_INFLUENCES_STEM_C_2 = `I am becoming aware...`;
const PARENTAL_INFLUENCES_STEM_C_3 = `If I were completely free of Mother's sexual influence...`;
const PARENTAL_INFLUENCES_STEM_C_4 = `If I were completely free of Father's sexual influence...`;
const PARENTAL_INFLUENCES_STEM_C_5 = `If I listen to my own inner voice rather than the voice of Mother or Father...`;
const PARENTAL_INFLUENCES_STEM_C_6 = `If I allow myself to see what I see and know what I know...`;
// parental influences D
const PARENTAL_INFLUENCES_STEM_D_1 = `If no one has the right to dictate my sexuality...`;
const PARENTAL_INFLUENCES_STEM_D_2 = `If I were willing to take full responsibility for my own sexuality...`;
const PARENTAL_INFLUENCES_STEM_D_3 = `If I were completely free of Mother's sexual influence...`;
const PARENTAL_INFLUENCES_STEM_D_4 = `If I were completely free of Father's sexual influence...`;
const PARENTAL_INFLUENCES_STEM_D_5 = `If I listen to my own inner voice rather than the voice of Mother or Father...`;
const PARENTAL_INFLUENCES_STEM_D_6 = `If I allow myself to see what I see and know what I know...`;
// parental influences E
const PARENTAL_INFLUENCES_STEM_E_1 = `If no one has the right to dictate my sexuality...`;
const PARENTAL_INFLUENCES_STEM_E_2 = `If I were willing to take full responsibility for my own sexuality...`;
const PARENTAL_INFLUENCES_STEM_E_3 = `The frightening thing about taking full responsibility for my sexuality is...`;
const PARENTAL_INFLUENCES_STEM_E_4 = `The liberating thing about taking full responsibility for my sexuality is...`;
const PARENTAL_INFLUENCES_STEM_E_5 = `If I allow myself to understand what I have been writing...`;
const PARENTAL_INFLUENCES_STEM_E_6 = `Right now it seems obvious that...`;
// opposite sex
const OPPOSITE_SEX_STEM_1 = `Woman to me is...`;
const OPPOSITE_SEX_STEM_2 = `Man to me is...`;
const OPPOSITE_SEX_STEM_3 = `The hard thing about being a woman is...`;
const OPPOSITE_SEX_STEM_4 = `The hard thing about being a man is...`;
const OPPOSITE_SEX_STEM_5 = `If I didn't have to be concerned about being masculine...`;
const OPPOSITE_SEX_STEM_6 = `If I didn't have to be concerned about being feminine...`;
// sex and spirit
const SEX_AND_SPIRIT_STEM_1 = `If there is a respect in which my sexuality expresses my deepest self...`;
const SEX_AND_SPIRIT_STEM_2 = `If I take full responsibility for my sexual choices and actions...`;
const SEX_AND_SPIRIT_STEM_3 = `If I look at my sexual partner and tell myself, "He/she is my choice"...`;
const SEX_AND_SPIRIT_STEM_4 = `I am becoming aware...`;
const SEX_AND_SPIRIT_STEM_5 = `The difficult thing about looking clearly at this issue is...`;
const SEX_AND_SPIRIT_STEM_6 = `The liberating thing about looking at this issue clearly might be...`;
// Self-Esteem
// - Early Messages
// - Behaviors that affect self-esteem
// - Self-Sabotage
// - Waking Up
// - Self-Acceptance
const EARLY_MESSAGES_STEM_A_1 = `Mother gave me the sense that I was...`;
const EARLY_MESSAGES_STEM_A_2 = `Father gave me the sense that I was...`;
const EARLY_MESSAGES_STEM_A_3 = `When Mother saw me making mistakes, she...`;
const EARLY_MESSAGES_STEM_A_4 = `When Father saw me making mistakes, he...`;
const EARLY_MESSAGES_STEM_A_5 = `When I see myself making mistakes, I...`;
const EARLY_MESSAGES_STEM_A_6 = `If someone had fully believed in my intelligence...`;
// Early Messages B
const EARLY_MESSAGES_STEM_B_1 = `If someone had fully believe in my goodness...`;
const EARLY_MESSAGES_STEM_B_2 = `One of the messages about myself I absorbed in childhood was that I...`;
const EARLY_MESSAGES_STEM_B_3 = `I am becoming aware...`;
const EARLY_MESSAGES_STEM_B_4 = `The thing that feels most important to to write down is...`;
const EARLY_MESSAGES_STEM_B_5 = `The ways I feel that my self-esteem was influenced by the messages that I received from adults when I was little are...`;
const EARLY_MESSAGES_STEM_B_6 = `The things I tell myself that my mother and father told me are...`;
// Behaviors TASE A
const BEHAVIOR_T_A_S_E_STEM_A_1 = `Sometimes I hurt my self-esteem when I...`;
const BEHAVIOR_T_A_S_E_STEM_A_2 = `I like myself most when I...`;
const BEHAVIOR_T_A_S_E_STEM_A_3 = `I like myself most when, in dealing with others, I...`;
const BEHAVIOR_T_A_S_E_STEM_A_4 = `When I choose to function consciously and think about what I am doing...`;
const BEHAVIOR_T_A_S_E_STEM_A_5 = `When I am dishonest with myself or others...`;
const BEHAVIOR_T_A_S_E_STEM_A_6 = `When I am honest with myself or others...`;
// Behaviors TASE B
const BEHAVIOR_T_A_S_E_STEM_B_1 = `When I act with integrity...`;
const BEHAVIOR_T_A_S_E_STEM_B_2 = `If I say "no" when I want to say "no," and "yes" when I want to say "yes"... `;
const BEHAVIOR_T_A_S_E_STEM_B_3 = `When I take full responsiblity for every word I utter...`;
const BEHAVIOR_T_A_S_E_STEM_B_4 = `If I allow myself to understand what I am writing...`;
const BEHAVIOR_T_A_S_E_STEM_B_5 = `If any of what I've been writing is true...`;
const BEHAVIOR_T_A_S_E_STEM_B_6 = `It might be helpful if I...`;
// Self-Sabotage
const SELF_SABOTAGE_STEM_A_1 = `One of the ways I sometimes contribute to my own frustration is...`;
const SELF_SABOTAGE_STEM_A_2 = `One of the ways I sometimes make it difficult for people to give me what I want is...`;
const SELF_SABOTAGE_STEM_A_3 = `One of the ways I sometimes obstruct my own success is...`;
const SELF_SABOTAGE_STEM_A_4 = `One of the ways I sometimes make myself helpless is...`;
const SELF_SABOTAGE_STEM_A_5 = `The good thing about making myself helpless is...`;
const SELF_SABOTAGE_STEM_A_6 = `If I were to take full responsibility for my own existence...`;
// self-sabotage B
const SELF_SABOTAGE_STEM_B_1 = `If I were to take full responsibility for getting what I want...`;
const SELF_SABOTAGE_STEM_B_2 = `If I fully accepted my right to be happy...`;
const SELF_SABOTAGE_STEM_B_3 = `I am becoming aware...`;
const SELF_SABOTAGE_STEM_B_4 = `If I allow myself to understand what I have been writing...`;
const SELF_SABOTAGE_STEM_B_5 = `It is becoming clear to me that...`;
const SELF_SABOTAGE_STEM_B_6 = `If I were willing to admit what I see and know...`;
// waking up A
const WAKING_UP_STEM_A_1 = `If I exercise the courage to honor my own life...`;
const WAKING_UP_STEM_A_2 = `If I were willing to see what I see and know what I know...`;
const WAKING_UP_STEM_A_3 = `If I were willing to breathe deeply and feel my own power...`;
const WAKING_UP_STEM_A_4 = `If I allow old wounds to fade away...`;
const WAKING_UP_STEM_A_5 = `If I allow myself to wake up to the possibilities of life...`;
const WAKING_UP_STEM_A_6 = `If I stop blaming others and start living...`;
// waking up B
const WAKING_UP_STEM_B_1 = `If I stop looking for someone to feel sorry for me...`;
const WAKING_UP_STEM_B_2 = `If I had the courage to honor my own excitement...`;
const WAKING_UP_STEM_B_3 = `As I allow myself to feel lighter...`;
const WAKING_UP_STEM_B_4 = `If I had the courage to honor my own excitement...`;
const WAKING_UP_STEM_B_5 = `If I honor the life within me...`;
const WAKING_UP_STEM_B_6 = `If I allow old pains to fade into irrelevance...`;
// self acceptance
const SELF_ACCEPTANCE_STEM_A_1 = `If self-acceptance means not denying or disowning who I am...`;
const SELF_ACCEPTANCE_STEM_A_2 = `If self-acceptance is the foundation of good self-esteem...`;
const SELF_ACCEPTANCE_STEM_A_3 = `As I learn to accept my feelings whether I like them or not...`;
const SELF_ACCEPTANCE_STEM_A_4 = `As I learn to accept all the different parts of who I am...`;
const SELF_ACCEPTANCE_STEM_A_5 = `As I breathe into feelings rather than pretend I don't feel them...`;
const SELF_ACCEPTANCE_STEM_A_6 = `As I admit how much I secretly (or not so secretly) like myself...`;
// self acceptance B
const SELF_ACCEPTANCE_STEM_B_1 = `If I surrender to the process of change and growth..`;
const SELF_ACCEPTANCE_STEM_B_2 = `As I become more serene...`;
const SELF_ACCEPTANCE_STEM_B_3 = `As I feel energy flowing through my body...`;
const SELF_ACCEPTANCE_STEM_B_4 = `As this work changes me in ways I have not fully noticed...`;
const SELF_ACCEPTANCE_STEM_B_5 = `I am becoming aware...`;
const SELF_ACCEPTANCE_STEM_B_6 = `If I release the best within myself...`;
// Sage-Self
// - Higher Self
// - Triumph of Self-Esteem
const HIGHER_SELF_STEM_A_1 = `If there is a part of me that knows more than my conscious mind...`;
const HIGHER_SELF_STEM_A_2 = `Sometimes, when I am alone and see my life with my own eyes...`;
const HIGHER_SELF_STEM_A_3 = `When I feel connected with what really matters to me...`;
const HIGHER_SELF_STEM_A_4 = `When I think of all the nonsense I allow to clutter up my vision...`;
const HIGHER_SELF_STEM_A_5 = `As I rise higher and higher above concerns that are not really what life is about...`;
const HIGHER_SELF_STEM_A_6 = `When I look at my childhood from the perspective of my higher self...`;
// higher self B
const HIGHER_SELF_STEM_B_1 = `When I rise above fighting myself or blaming others...`;
const HIGHER_SELF_STEM_B_2 = `When I understand that all that exists is the present...`;
const HIGHER_SELF_STEM_B_3 = `When I allow myself to experience the ecstatic part of me...`;
const HIGHER_SELF_STEM_B_4 = `I am becoming aware...`;
const HIGHER_SELF_STEM_B_5 = `As my subconscious mind absorbs everything I have been writing...`;
const HIGHER_SELF_STEM_B_6 = `As these understandings become more and more a part of me...`;
// Triumph of the self
const TRIUMPH_OF_SE_STEM_A_1 = `As I learn to hear the voice of my sage-self...`;
const TRIUMPH_OF_SE_STEM_A_2 = `As I become more sensitive to the things a deeper part of me knows...`;
const TRIUMPH_OF_SE_STEM_A_3 = `As I learn to honor my own wisdom...`;
const TRIUMPH_OF_SE_STEM_A_4 = `As I gain the courage to live from the perspective of my sage-self...`;
const TRIUMPH_OF_SE_STEM_A_5 = `If my best and clearest moments turn out to be what life is really all about...`;
const TRIUMPH_OF_SE_STEM_A_6 = `When I am fully ready to see what I see and know what I know...`;
// Triumph of the self B
const TRIUMPH_OF_SE_STEM_B_1 = `As I breathe deeply and feel my own power...`;
const TRIUMPH_OF_SE_STEM_B_2 = `When I look back at the distance I have traveled since beginning these sentence stems...`;
const TRIUMPH_OF_SE_STEM_B_3 = `Right now it seems clear that...`;
const TRIUMPH_OF_SE_STEM_B_4 = `If any of what I have been writing is true, it might be helpful if I...`;
const TRIUMPH_OF_SE_STEM_B_5 = `If I allow this procedure to lead to a breakthrough...`;
const TRIUMPH_OF_SE_STEM_B_6 = `When I realize that understanding is power...`;
// Random 
const stemArray = 
[
	INTRODUCTORY_STEM_1, INTRODUCTORY_STEM_2, INTRODUCTORY_STEM_3, INTRODUCTORY_STEM_4, INTRODUCTORY_STEM_5, INTRODUCTORY_STEM_6,
	BEGINNING_STEM_1, BEGINNING_STEM_2, BEGINNING_STEM_3, BEGINNING_STEM_4, BEGINNING_STEM_5, BEGINNING_STEM_6,
	MOTHER_STEM_A_1, MOTHER_STEM_A_2, MOTHER_STEM_A_3, MOTHER_STEM_A_4, MOTHER_STEM_A_5, MOTHER_STEM_A_6,
	MOTHER_STEM_B_1, MOTHER_STEM_B_2, MOTHER_STEM_B_3, MOTHER_STEM_B_4, MOTHER_STEM_B_5, MOTHER_STEM_B_6,
	MOTHER_STEM_C_1, MOTHER_STEM_C_2, MOTHER_STEM_C_3, MOTHER_STEM_C_4, MOTHER_STEM_C_5, MOTHER_STEM_C_6,
	FATHER_STEM_A_1, FATHER_STEM_A_2, FATHER_STEM_A_3, FATHER_STEM_A_4, FATHER_STEM_A_5, FATHER_STEM_A_6,
	FATHER_STEM_B_1, FATHER_STEM_B_2, FATHER_STEM_B_3, FATHER_STEM_B_4, FATHER_STEM_B_5, FATHER_STEM_B_6,
	FATHER_STEM_C_1, FATHER_STEM_C_2, FATHER_STEM_C_3, FATHER_STEM_C_4, FATHER_STEM_C_5, FATHER_STEM_C_6,
	ANOTHER_PERSPECTIVE_STEM_1, ANOTHER_PERSPECTIVE_STEM_2, ANOTHER_PERSPECTIVE_STEM_3, ANOTHER_PERSPECTIVE_STEM_4, ANOTHER_PERSPECTIVE_STEM_5, ANOTHER_PERSPECTIVE_STEM_6,
	CHILD_STEM_A_1, CHILD_STEM_A_2, CHILD_STEM_A_3, CHILD_STEM_A_4, CHILD_STEM_A_5, CHILD_STEM_A_6,
	CHILD_STEM_B_1, CHILD_STEM_B_2, CHILD_STEM_B_3, CHILD_STEM_B_4, CHILD_STEM_B_5, CHILD_STEM_B_6,
	CHILD_STEM_C_1, CHILD_STEM_C_2, CHILD_STEM_C_3, CHILD_STEM_C_4, CHILD_STEM_C_5, CHILD_STEM_C_6,
	TEENAGE_STEM_A_1, TEENAGE_STEM_A_2, TEENAGE_STEM_A_3, TEENAGE_STEM_A_4, TEENAGE_STEM_A_5, TEENAGE_STEM_A_6,
	TEENAGE_STEM_B_1, TEENAGE_STEM_B_2, TEENAGE_STEM_B_3, TEENAGE_STEM_B_4, TEENAGE_STEM_B_5, TEENAGE_STEM_B_6,
	TEENAGE_STEM_C_1, TEENAGE_STEM_C_2, TEENAGE_STEM_C_3, TEENAGE_STEM_C_4, TEENAGE_STEM_C_5, TEENAGE_STEM_C_6,
	INTEGRATION_STEM_1, INTEGRATION_STEM_2, INTEGRATION_STEM_3, INTEGRATION_STEM_4, INTEGRATION_STEM_5, INTEGRATION_STEM_6,
	PAIN_STEM_A_1, PAIN_STEM_A_2, PAIN_STEM_A_3, PAIN_STEM_A_4, PAIN_STEM_A_5, PAIN_STEM_A_6,
	PAIN_STEM_B_1, PAIN_STEM_B_2, PAIN_STEM_B_3, PAIN_STEM_B_4, PAIN_STEM_B_5, PAIN_STEM_B_6,
	ANGER_STEM_A_1, ANGER_STEM_A_2, ANGER_STEM_A_3, ANGER_STEM_A_4, ANGER_STEM_A_5, ANGER_STEM_A_6,
	ANGER_STEM_B_1, ANGER_STEM_B_2, ANGER_STEM_B_3, ANGER_STEM_B_4, ANGER_STEM_B_5, ANGER_STEM_B_6,
	FEAR_STEM_A_1, FEAR_STEM_A_2, FEAR_STEM_A_3, FEAR_STEM_A_4, FEAR_STEM_A_5, FEAR_STEM_A_6,
	FEAR_STEM_B_1, FEAR_STEM_B_2, FEAR_STEM_B_3, FEAR_STEM_B_4, FEAR_STEM_B_5, FEAR_STEM_B_6,
	ENVY_STEM_1, ENVY_STEM_2, ENVY_STEM_3, ENVY_STEM_4, ENVY_STEM_5, ENVY_STEM_6,
	HAPPINESS_STEM_A_1, HAPPINESS_STEM_A_2, HAPPINESS_STEM_A_3, HAPPINESS_STEM_A_4, HAPPINESS_STEM_A_5, HAPPINESS_STEM_A_6,
	HAPPINESS_STEM_B_1, HAPPINESS_STEM_B_2, HAPPINESS_STEM_B_3, HAPPINESS_STEM_B_4, HAPPINESS_STEM_B_5, HAPPINESS_STEM_B_6,
	LOVE_STEM_A_1, LOVE_STEM_A_2, LOVE_STEM_A_3, LOVE_STEM_A_4, LOVE_STEM_A_5, LOVE_STEM_A_6,
	LOVE_STEM_B_1, LOVE_STEM_B_2, LOVE_STEM_B_3, LOVE_STEM_B_4, LOVE_STEM_B_5, LOVE_STEM_B_6,
	FEELING_LOVED_STEM_A_1, FEELING_LOVED_STEM_A_2, FEELING_LOVED_STEM_A_3, FEELING_LOVED_STEM_A_4, FEELING_LOVED_STEM_A_5, FEELING_LOVED_STEM_A_6,
	FEELING_LOVED_STEM_B_1, FEELING_LOVED_STEM_B_2, FEELING_LOVED_STEM_B_3, FEELING_LOVED_STEM_B_4, FEELING_LOVED_STEM_B_5, FEELING_LOVED_STEM_B_6,
	EXCITEMENT_STEM_A_1, EXCITEMENT_STEM_A_2, EXCITEMENT_STEM_A_3, EXCITEMENT_STEM_A_4, EXCITEMENT_STEM_A_5, EXCITEMENT_STEM_A_6,
	EXCITEMENT_STEM_B_1, EXCITEMENT_STEM_B_2, EXCITEMENT_STEM_B_3, EXCITEMENT_STEM_B_4, EXCITEMENT_STEM_B_5, EXCITEMENT_STEM_B_6,
	SEXUALITY_STEM_1, SEXUALITY_STEM_2, SEXUALITY_STEM_3, SEXUALITY_STEM_4, SEXUALITY_STEM_5, SEXUALITY_STEM_6,
	PARENTAL_INFLUENCES_STEM_A_1, PARENTAL_INFLUENCES_STEM_A_2, PARENTAL_INFLUENCES_STEM_A_3, PARENTAL_INFLUENCES_STEM_A_4, PARENTAL_INFLUENCES_STEM_A_5, PARENTAL_INFLUENCES_STEM_A_6,
	PARENTAL_INFLUENCES_STEM_B_1, PARENTAL_INFLUENCES_STEM_B_2, PARENTAL_INFLUENCES_STEM_B_3, PARENTAL_INFLUENCES_STEM_B_4, PARENTAL_INFLUENCES_STEM_B_5, PARENTAL_INFLUENCES_STEM_B_6,
	PARENTAL_INFLUENCES_STEM_C_1, PARENTAL_INFLUENCES_STEM_C_2, PARENTAL_INFLUENCES_STEM_C_3, PARENTAL_INFLUENCES_STEM_C_4, PARENTAL_INFLUENCES_STEM_C_5, PARENTAL_INFLUENCES_STEM_C_6,
	PARENTAL_INFLUENCES_STEM_D_1, PARENTAL_INFLUENCES_STEM_D_2, PARENTAL_INFLUENCES_STEM_D_3, PARENTAL_INFLUENCES_STEM_D_4, PARENTAL_INFLUENCES_STEM_D_5, PARENTAL_INFLUENCES_STEM_D_6,
	PARENTAL_INFLUENCES_STEM_E_1, PARENTAL_INFLUENCES_STEM_E_2, PARENTAL_INFLUENCES_STEM_E_3, PARENTAL_INFLUENCES_STEM_E_4, PARENTAL_INFLUENCES_STEM_E_5, PARENTAL_INFLUENCES_STEM_E_6,
	OPPOSITE_SEX_STEM_1, OPPOSITE_SEX_STEM_2, OPPOSITE_SEX_STEM_3, OPPOSITE_SEX_STEM_4, OPPOSITE_SEX_STEM_5, OPPOSITE_SEX_STEM_6,
	SEX_AND_SPIRIT_STEM_1, SEX_AND_SPIRIT_STEM_2, SEX_AND_SPIRIT_STEM_3, SEX_AND_SPIRIT_STEM_4, SEX_AND_SPIRIT_STEM_5, SEX_AND_SPIRIT_STEM_6,
	EARLY_MESSAGES_STEM_A_1, EARLY_MESSAGES_STEM_A_2, EARLY_MESSAGES_STEM_A_3, EARLY_MESSAGES_STEM_A_4, EARLY_MESSAGES_STEM_A_5, EARLY_MESSAGES_STEM_A_6,
	EARLY_MESSAGES_STEM_B_1, EARLY_MESSAGES_STEM_B_2, EARLY_MESSAGES_STEM_B_3, EARLY_MESSAGES_STEM_B_4, EARLY_MESSAGES_STEM_B_5, EARLY_MESSAGES_STEM_B_6,
	BEHAVIOR_T_A_S_E_STEM_A_1, BEHAVIOR_T_A_S_E_STEM_A_2, BEHAVIOR_T_A_S_E_STEM_A_3, BEHAVIOR_T_A_S_E_STEM_A_4, BEHAVIOR_T_A_S_E_STEM_A_5, BEHAVIOR_T_A_S_E_STEM_A_6,
	BEHAVIOR_T_A_S_E_STEM_B_1, BEHAVIOR_T_A_S_E_STEM_B_2, BEHAVIOR_T_A_S_E_STEM_B_3, BEHAVIOR_T_A_S_E_STEM_B_4, BEHAVIOR_T_A_S_E_STEM_B_5, BEHAVIOR_T_A_S_E_STEM_B_6,
	SELF_SABOTAGE_STEM_A_1, SELF_SABOTAGE_STEM_A_2, SELF_SABOTAGE_STEM_A_3, SELF_SABOTAGE_STEM_A_4, SELF_SABOTAGE_STEM_A_5, SELF_SABOTAGE_STEM_A_6,
	SELF_SABOTAGE_STEM_B_1, SELF_SABOTAGE_STEM_B_2, SELF_SABOTAGE_STEM_B_3, SELF_SABOTAGE_STEM_B_4, SELF_SABOTAGE_STEM_B_5, SELF_SABOTAGE_STEM_B_6,
	WAKING_UP_STEM_A_1, WAKING_UP_STEM_A_2, WAKING_UP_STEM_A_3, WAKING_UP_STEM_A_4, WAKING_UP_STEM_A_5, WAKING_UP_STEM_A_6,
	WAKING_UP_STEM_B_1, WAKING_UP_STEM_B_2, WAKING_UP_STEM_B_3, WAKING_UP_STEM_B_4, WAKING_UP_STEM_B_5, WAKING_UP_STEM_B_6,
	SELF_ACCEPTANCE_STEM_A_1, SELF_ACCEPTANCE_STEM_A_2, SELF_ACCEPTANCE_STEM_A_3, SELF_ACCEPTANCE_STEM_A_4, SELF_ACCEPTANCE_STEM_A_5, SELF_ACCEPTANCE_STEM_A_6,
	SELF_ACCEPTANCE_STEM_B_1, SELF_ACCEPTANCE_STEM_B_2, SELF_ACCEPTANCE_STEM_B_3, SELF_ACCEPTANCE_STEM_B_4, SELF_ACCEPTANCE_STEM_B_5, SELF_ACCEPTANCE_STEM_B_6,
	HIGHER_SELF_STEM_A_1, HIGHER_SELF_STEM_A_2, HIGHER_SELF_STEM_A_3, HIGHER_SELF_STEM_A_4, HIGHER_SELF_STEM_A_5, HIGHER_SELF_STEM_A_6,
	HIGHER_SELF_STEM_B_1, HIGHER_SELF_STEM_B_2, HIGHER_SELF_STEM_B_3, HIGHER_SELF_STEM_B_4, HIGHER_SELF_STEM_B_5, HIGHER_SELF_STEM_B_6,
	TRIUMPH_OF_SE_STEM_A_1, TRIUMPH_OF_SE_STEM_A_2, TRIUMPH_OF_SE_STEM_A_3, TRIUMPH_OF_SE_STEM_A_4, TRIUMPH_OF_SE_STEM_A_5, TRIUMPH_OF_SE_STEM_A_6,
	TRIUMPH_OF_SE_STEM_B_1, TRIUMPH_OF_SE_STEM_B_2, TRIUMPH_OF_SE_STEM_B_3, TRIUMPH_OF_SE_STEM_B_4, TRIUMPH_OF_SE_STEM_B_5, TRIUMPH_OF_SE_STEM_B_6
]

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
const initializeOneStartButton = function () {
	clearPage();
	headerHTML.style.display = "block";
	startButton.style.display = "block";
	homeButton.style.display = "block";
}
const initializeTwoStartButtons = function() {
	clearPage();
	headerHTML.style.display = "block";
	homeButton.style.display = "block";
	startButtonA.style.display = "block";
	startButtonB.style.display = "block";
}
const initializeThreeStartButtons = function() {	
	clearPage();
	headerHTML.style.display = "block";
	homeButton.style.display = "block";
	startButtonA.style.display = "block";
	startButtonB.style.display = "block";
	startButtonC.style.display = "block";
}
const initializeFiveStartButtons = function() {
	clearPage();
	headerHTML.style.display = "block";
	homeButton.style.display = "block";
	startButtonA.style.display = "block";
	startButtonB.style.display = "block";
	startButtonC.style.display = "block";
	startButtonD.style.display = "block";
	startButtonE.style.display = "block";
}
const initializeIntroductory = function() {	
	topicState = "introductory";
	loadStems(INTRODUCTORY_STEM_1, INTRODUCTORY_STEM_2, INTRODUCTORY_STEM_3, INTRODUCTORY_STEM_4, INTRODUCTORY_STEM_5, INTRODUCTORY_STEM_6);
	headerHTML.innerHTML = INTRODUCTORY_HEADER;
	initializeOneStartButton();
}
// Parental
const displayParentalButtons = function() {	
	clearPage();
	beginningButton.style.display = "block";
	motherButton.style.display = "block";
	fatherButton.style.display = "block";
	anotherPerspectiveButton.style.display = "block";
	homeButton.style.display = "block";	
}
const initializeParental = function() {	
	topicState = "parental";		
	displayParentalButtons();
	headerHTML.innerHTML = PARENTAL_HEADER;	
	headerHTML.style.display = "block";		
}
const initializeBeginning = function() {
	topicState = "beginning";
	loadStems(BEGINNING_STEM_1, BEGINNING_STEM_2, BEGINNING_STEM_3, BEGINNING_STEM_4, BEGINNING_STEM_5, BEGINNING_STEM_6);
	headerHTML.innerHTML = BEGINNING_HEADER;	
	initializeOneStartButton();
	parentalButton.style.display = "block";
}
// Mother
const initializeMother = function() {
	topicState = "mother";	
	initializeThreeStartButtons();
	headerHTML.innerHTML = MOTHER_HEADER;	
	parentalButton.style.display = "block";
}
const initializeFather = function() {
	topicState = "father";	
	initializeThreeStartButtons();	
	headerHTML.innerHTML = FATHER_HEADER;	
	parentalButton.style.display = "block";	
}
const initializeAnotherPerspective = function() {
	topicState = "another-perspective";
	loadStems(ANOTHER_PERSPECTIVE_STEM_1, ANOTHER_PERSPECTIVE_STEM_2, ANOTHER_PERSPECTIVE_STEM_3, ANOTHER_PERSPECTIVE_STEM_4, ANOTHER_PERSPECTIVE_STEM_5, ANOTHER_PERSPECTIVE_STEM_6);
	headerHTML.innerHTML = ANOTHER_PERSPECTIVE;
	initializeOneStartButton();
	parentalButton.style.display = "block";
}
// Child - Teenage Self
const displayChildTeenageButtons = function() {
	clearPage();
	homeButton.style.display = "block";	
	childButton.style.display = "block";
	teenageButton.style.display = "block";
	integrationButton.style.display = "block";	
}
const initializeChildTeenage = function() {
	topicState = "child-teenage";	
	displayChildTeenageButtons();
	headerHTML.innerHTML = CHILD_TEENAGE_HEADER;
	headerHTML.style.display = "block";
}
const initializeChild = function() {
	topicState = "child";	
	initializeThreeStartButtons();	
	childTeenageButton.style.display = "block";
	headerHTML.innerHTML = CHILD_HEADER;
}
const initializeTeenage = function() {
	topicState = "teenage";	
	initializeThreeStartButtons();
	childTeenageButton.style.display = "block";
	headerHTML.innerHTML = TEENAGE_HEADER;
}
const initializeIntegration = function() {
	topicState = "integration";
	loadStems(INTEGRATION_STEM_1, INTEGRATION_STEM_2, INTEGRATION_STEM_3, INTEGRATION_STEM_4, INTEGRATION_STEM_5, INTEGRATION_STEM_6);
	headerHTML.innerHTML = INTEGRATION_HEADER;	
	initializeOneStartButton();
	childTeenageButton.style.display = "block";
}
// Negative Feelings
const displayNegativeButtons = function() {
	clearPage();
	homeButton.style.display = "block";	
	painButton.style.display = "block";
	angerButton.style.display = "block";
	fearButton.style.display = "block";
	envyButton.style.display = "block";
}
const initializeNegative = function() {
	topicState = "negative";	
	displayNegativeButtons();
	headerHTML.style.display = "block";
	headerHTML.innerHTML = NEGATIVE_HEADER;	
}
const initializePain = function() {
	topicState = "pain";	
	initializeTwoStartButtons();
	headerHTML.innerHTML = PAIN_HEADER;
	negativeButton.style.display = "block";
}
const initializeAnger = function() {
	topicState = "anger";	
	initializeTwoStartButtons();
	headerHTML.innerHTML = ANGER_HEADER;
	negativeButton.style.display = "block";
}
const initializeFear = function() {
	topicState = "fear";	
	initializeTwoStartButtons();
	headerHTML.innerHTML = FEAR_HEADER;
	negativeButton.style.display = "block";
}
const initializeEnvy = function() {
	topicState = "envy";
	initializeOneStartButton();
	loadStems(ENVY_STEM_1, ENVY_STEM_2, ENVY_STEM_3, ENVY_STEM_4, ENVY_STEM_5, ENVY_STEM_6);
	negativeButton.style.display = "block";
}
// Positive Emotions
const displayPositiveButtons = function() {
	clearPage();	
	homeButton.style.display = "block";	
	happinessButton.style.display = "block";
	loveButton.style.display = "block";
	feelingLovedButton.style.display = "block";
	excitementButton.style.display = "block";
}
const initializePositive = function() {
	topicState = "positive";	
	displayPositiveButtons();
	headerHTML.style.display = "block";
	headerHTML.innerHTML = POSITIVE_HEADER;
}
const initializeHappiness = function() {
	topicState = "happiness";	
	initializeTwoStartButtons();
	headerHTML.innerHTML = HAPPINESS_HEADER;
	positiveButton.style.display = "block";
}
const initializeLove = function(){
	topicState = "love";	
	initializeTwoStartButtons();
	headerHTML.innerHTML = LOVE_HEADER;
	positiveButton.style.display = "block";
}
const initializeFeelingLoved = function() {
	topicState = "feeling-loved";	
	initializeTwoStartButtons();
	positiveButton.style.display = "block";
	headerHTML.innerHTML = FEELING_LOVED_HEADER;
}
const initializeExcitement = function() {
	topicState = "excitement";	
	initializeTwoStartButtons();
	headerHTML.innerHTML = EXCITEMENT_HEADER;
	positiveButton.style.display = "block";
}
// Sexuality
const displaySexualityButtons = function() {
	clearPage();
	homeButton.style.display = "block";
	sexualityButton.style.display = "block";
	parentalInfluencesButton.style.display = "block";
	oppositeSexButton.style.display = "block";
	sexAndSpiritButton.style.display = "block";
}
const initializeExploringSexuality = function() {
	topicState = "experiencing-sexuality";	
	displaySexualityButtons();
	headerHTML.style.display = "block";
	headerHTML.innerHTML = EXPLORING_SEXUALITY_HEADER;	
}
const initializeSexuality = function() {
	topicState = "sexuality";	
	loadStems(SEXUALITY_STEM_1, SEXUALITY_STEM_2, SEXUALITY_STEM_3, SEXUALITY_STEM_4, SEXUALITY_STEM_5, SEXUALITY_STEM_6);
	headerHTML.innerHTML = SEXUALITY_HEADER;
	initializeOneStartButton();
	exploringSexualityButton.style.display = "block";
}
const initializeParentalInfluences = function() {
	topicState = "parental-influences";	
	headerHTML.innerHTML = PARENTAL_INFLUENCES_HEADER;
	initializeFiveStartButtons();
	exploringSexualityButton.style.display = "block";
}
const initializeOppositeSex = function() {
	topicState = "opposite-sex";	
	headerHTML.innerHTML = OPPOSITE_SEX_HEADER;
	loadStems(OPPOSITE_SEX_STEM_1, OPPOSITE_SEX_STEM_2, OPPOSITE_SEX_STEM_3, OPPOSITE_SEX_STEM_4, OPPOSITE_SEX_STEM_5, OPPOSITE_SEX_STEM_6);
	initializeOneStartButton();
	exploringSexualityButton.style.display = "block";
}
const initializeSexAndSpirit = function() {
	topicState = "sex-and-spirit";	
	headerHTML.innerHTML = SEX_AND_SPIRIT_HEADER;
	loadStems(SEX_AND_SPIRIT_STEM_1, SEX_AND_SPIRIT_STEM_2, SEX_AND_SPIRIT_STEM_3, SEX_AND_SPIRIT_STEM_4, SEX_AND_SPIRIT_STEM_5, SEX_AND_SPIRIT_STEM_6);
	initializeOneStartButton();
	exploringSexualityButton.style.display = "block";
}
// Self Esteem
const displaySelfEsteemButtons = function() {
	clearPage();
	homeButton.style.display = "block";
	earlyMessagesButton.style.display = "block";
	behaviorsTASE_Button.style.display = "block";
	selfSabotageButton.style.display = "block";
	wakingUpButton.style.display = "block";
	selfAcceptanceButton.style.display = "block";
}
const initializeSelfEsteem = function() {
	topicState = "self-esteem";	
	displaySelfEsteemButtons();
	headerHTML.innerHTML = SELF_ESTEEM_HEADER;
	headerHTML.style.display = "block";	
}
const initializeEarlyMessages = function() {
	topicState = "early-messages";	
	headerHTML.innerHTML = EARLY_MESSAGES_HEADER;
	initializeTwoStartButtons();
	selfEsteemButton.style.display = "block";
}
const initializeBehaviorsTASE = function() {
	topicState = "behaviors-tase";	
	headerHTML.innerHTML = BEHAVIORS_T_A_S_E_HEADER;
	initializeTwoStartButtons();
	selfEsteemButton.style.display = "block";
}
const initializeSelfSabotage = function() {
	topicState = "self-sabotage";	
	headerHTML.innerHTML = SELF_SABOTAGE_HEADER;
	initializeTwoStartButtons();
	selfEsteemButton.style.display = "block";
}
const initializeWakingUp = function() {
	topicState = "waking-up";	
	headerHTML.innerHTML = WAKING_UP_HEADER;
	initializeTwoStartButtons();
	selfEsteemButton.style.display = "block";
}
const initializeSelfAcceptance = function() {
	topicState = "self-acceptance";	
	headerHTML.innerHTML = SELF_ACCEPTANCE_HEADER;
	initializeTwoStartButtons();
	selfEsteemButton.style.display = "block";
}
// Sage Self
const displaySageSelfButtons = function() {
	clearPage();
	higherSelfButton.style.display = "block";
	triumphOfSE_Button.style.display = "block";
	homeButton.style.display = "block";
}
const initializeSageSelf = function() {
	topicState = "sage-self";	
	displaySageSelfButtons();
	headerHTML.innerHTML = SAGE_SELF_HEADER;
	headerHTML.style.display = "block";	
}
const initializeHigherSelf = function() {
	topicState = "higher-self";	
	headerHTML.innerHTML = HIGHER_SELF_HEADER;
	initializeTwoStartButtons();
	sageSelfButton.style.display = "block";
}
const initializeTriumphOfSE = function() {
	topicState = "triumph-of-se";	
	headerHTML.innerHTML = TRIUMPH_OF_SE_HEADER;
	initializeTwoStartButtons();
	sageSelfButton.style.display = "block";
}
//random
const initializeRandom = function() {
	pillarState = "random";
	clearPage();
	loadStems(getRandomStem(), getRandomStem(), getRandomStem(), getRandomStem(), getRandomStem(), getRandomStem());
	headerHTML.innerHTML = RANDOM_HEADER;
	initializeOneStartButton();
}
const getRandomStem = function() {	
	let randomNumber = Math.floor(Math.random()*NUMBER_OF_STEMS);	
	return stemArray[randomNumber];
}
const clearPage = function() {
	howToUseButton.style.display = "none";
	howParagraph.style.display = "none";
	homeButton.style.display = "none";	
	startButton.style.display = "none";
	startButtonA.style.display = "none";
	startButtonB.style.display = "none";
	startButtonC.style.display = "none";
	startButtonD.style.display = "none";
	startButtonE.style.display = "none";
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
	happinessButton.style.display = "none";
	loveButton.style.display = "none";
	feelingLovedButton.style.display = "none";
	excitementButton.style.display = "none";
	sexualityButton.style.display = "none";
	parentalInfluencesButton.style.display = "none";
	oppositeSexButton.style.display = "none";
	sexAndSpiritButton.style.display = "none";
	earlyMessagesButton.style.display = "none";
	behaviorsTASE_Button.style.display = "none";
	selfSabotageButton.style.display = "none";
	wakingUpButton.style.display = "none";
	selfAcceptanceButton.style.display = "none";	
	higherSelfButton.style.display = "none";
	triumphOfSE_Button.style.display = "none";
	//frontpage topic buttons
	introductoryButton.style.display = "none";
	parentalButton.style.display = "none";
	childTeenageButton.style.display = "none";
	negativeButton.style.display = "none";
	positiveButton.style.display = "none";
	exploringSexualityButton.style.display = "none";	
	selfEsteemButton.style.display = "none";
	sageSelfButton.style.display = "none";
	randomButton.style.display = "none";	
}
const displayHowTo = function() {
	clearPage();
	howParagraph.style.display = "block";
	homeButton.style.display = "block";	
}
const displayHomePageTopics = function() {
	introductoryButton.style.display = "block";
	parentalButton.style.display = "block";
	childTeenageButton.style.display = "block";
	negativeButton.style.display = "block";
	positiveButton.style.display = "block";
	exploringSexualityButton.style.display = "block";	
	selfEsteemButton.style.display = "block";
	sageSelfButton.style.display = "block";
	randomButton.style.display = "block";
}
const displayHomePage = ()=>{
	howToUseButton.style.display = "block";
	displayHomePageTopics();
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
	else if(topicState === "happiness") {
		loadStems(HAPPINESS_STEM_A_1, HAPPINESS_STEM_A_2, HAPPINESS_STEM_A_3, HAPPINESS_STEM_A_4, HAPPINESS_STEM_A_5, HAPPINESS_STEM_A_6);
	}
	else if(topicState === "love") {
		loadStems(LOVE_STEM_A_1, LOVE_STEM_A_2, LOVE_STEM_A_3, LOVE_STEM_A_4, LOVE_STEM_A_5, LOVE_STEM_A_6);
	}
	else if(topicState === "feeling-loved") {
		loadStems(FEELING_LOVED_STEM_A_1, FEAR_STEM_A_2, FEELING_LOVED_STEM_A_3, FEELING_LOVED_STEM_A_4, FEELING_LOVED_STEM_A_5, FEELING_LOVED_STEM_A_6);
	}
	else if(topicState === "excitement") {
		loadStems(EXCITEMENT_STEM_A_1, EXCITEMENT_STEM_A_2, EXCITEMENT_STEM_A_3, EXCITEMENT_STEM_A_4, EXCITEMENT_STEM_A_5, EXCITEMENT_STEM_A_6);
	}
	else if(topicState === "parental-influences") {
		loadStems(PARENTAL_INFLUENCES_STEM_A_1, PARENTAL_INFLUENCES_STEM_A_2, PARENTAL_INFLUENCES_STEM_A_3, PARENTAL_INFLUENCES_STEM_A_4, PARENTAL_INFLUENCES_STEM_A_5, PARENTAL_INFLUENCES_STEM_A_6);
	}
	else if(topicState === "early-messages") {
		loadStems(EARLY_MESSAGES_STEM_A_1, EARLY_MESSAGES_STEM_A_2, EARLY_MESSAGES_STEM_A_3, EARLY_MESSAGES_STEM_A_4, EARLY_MESSAGES_STEM_A_5, EARLY_MESSAGES_STEM_A_6);
	}
	else if(topicState === "behaviors-tase") {
		loadStems(BEHAVIOR_T_A_S_E_STEM_A_1, BEHAVIOR_T_A_S_E_STEM_A_2, BEHAVIOR_T_A_S_E_STEM_A_3, BEHAVIOR_T_A_S_E_STEM_A_4, BEHAVIOR_T_A_S_E_STEM_A_5, BEHAVIOR_T_A_S_E_STEM_A_6);
	}
	else if(topicState === "self-sabotage") {
		loadStems(SELF_SABOTAGE_STEM_A_1, SELF_SABOTAGE_STEM_A_2, SELF_SABOTAGE_STEM_A_3, SELF_SABOTAGE_STEM_A_4, SELF_SABOTAGE_STEM_A_5, SELF_SABOTAGE_STEM_A_6);
	}
	else if(topicState === "waking-up") {
		loadStems(WAKING_UP_STEM_A_1, WAKING_UP_STEM_A_2, WAKING_UP_STEM_A_3, WAKING_UP_STEM_A_4, WAKING_UP_STEM_A_5, WAKING_UP_STEM_A_6);
	}
	else if(topicState === "self-acceptance") {
		loadStems(SELF_ACCEPTANCE_STEM_A_1, SELF_ACCEPTANCE_STEM_A_2, SELF_ACCEPTANCE_STEM_A_3, SELF_ACCEPTANCE_STEM_A_4, SELF_ACCEPTANCE_STEM_A_5, SELF_ACCEPTANCE_STEM_A_6);
	}
	else if(topicState === "higher-self") {
		loadStems(HIGHER_SELF_STEM_A_1, HIGHER_SELF_STEM_A_2, HIGHER_SELF_STEM_A_3, HIGHER_SELF_STEM_A_4, HIGHER_SELF_STEM_A_5, HIGHER_SELF_STEM_A_6);
	}
	else if(topicState === "triumph-of-se") {
		loadStems(TRIUMPH_OF_SE_STEM_A_1, TRIUMPH_OF_SE_STEM_A_2, TRIUMPH_OF_SE_STEM_A_3, TRIUMPH_OF_SE_STEM_A_4, TRIUMPH_OF_SE_STEM_A_5, TRIUMPH_OF_SE_STEM_A_6);
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
		loadStems(PAIN_STEM_B_1, PAIN_STEM_B_2, PAIN_STEM_B_3, PAIN_STEM_B_4, PAIN_STEM_B_5, PAIN_STEM_B_6);
	}
	else if(topicState === "anger") {
		loadStems(ANGER_STEM_B_1, ANGER_STEM_B_2, ANGER_STEM_B_3, ANGER_STEM_B_4, ANGER_STEM_B_5, ANGER_STEM_B_6);
	}
	else if(topicState === "fear") {
		loadStems(FEAR_STEM_B_1, FEAR_STEM_B_2, FEAR_STEM_B_3, FEAR_STEM_B_4, FEAR_STEM_B_5, FEAR_STEM_B_6);
	}	
	else if(topicState === "happiness") {
		loadStems(HAPPINESS_STEM_B_1, HAPPINESS_STEM_B_2, HAPPINESS_STEM_B_3, HAPPINESS_STEM_B_4, HAPPINESS_STEM_B_5, HAPPINESS_STEM_B_6);
	}
	else if(topicState === "love") {
		loadStems(LOVE_STEM_B_1, LOVE_STEM_B_2, LOVE_STEM_B_3, LOVE_STEM_B_4, LOVE_STEM_B_5, LOVE_STEM_B_6);
	}
	else if(topicState === "feeling-loved") {
		loadStems(FEELING_LOVED_STEM_B_1, FEAR_STEM_B_2, FEELING_LOVED_STEM_B_3, FEELING_LOVED_STEM_B_4, FEELING_LOVED_STEM_B_5, FEELING_LOVED_STEM_B_6);
	}
	else if(topicState === "excitement") {
		loadStems(EXCITEMENT_STEM_B_1, EXCITEMENT_STEM_B_2, EXCITEMENT_STEM_B_3, EXCITEMENT_STEM_B_4, EXCITEMENT_STEM_B_5, EXCITEMENT_STEM_B_6);
	}
	else if(topicState === "parental-influences") {
		loadStems(PARENTAL_INFLUENCES_STEM_B_1, PARENTAL_INFLUENCES_STEM_B_2, PARENTAL_INFLUENCES_STEM_B_3, PARENTAL_INFLUENCES_STEM_B_4, PARENTAL_INFLUENCES_STEM_B_5, PARENTAL_INFLUENCES_STEM_B_6);
	}
	else if(topicState === "early-messages") {
		loadStems(EARLY_MESSAGES_STEM_B_1, EARLY_MESSAGES_STEM_B_2, EARLY_MESSAGES_STEM_B_3, EARLY_MESSAGES_STEM_B_4, EARLY_MESSAGES_STEM_B_5, EARLY_MESSAGES_STEM_B_6);
	}
	else if(topicState === "behaviors-tase") {
		loadStems(BEHAVIOR_T_A_S_E_STEM_B_1, BEHAVIOR_T_A_S_E_STEM_B_2, BEHAVIOR_T_A_S_E_STEM_B_3, BEHAVIOR_T_A_S_E_STEM_B_4, BEHAVIOR_T_A_S_E_STEM_B_5, BEHAVIOR_T_A_S_E_STEM_B_6);
	}
	else if(topicState === "self-sabotage") {
		loadStems(SELF_SABOTAGE_STEM_B_1, SELF_SABOTAGE_STEM_B_2, SELF_SABOTAGE_STEM_B_3, SELF_SABOTAGE_STEM_B_4, SELF_SABOTAGE_STEM_B_5, SELF_SABOTAGE_STEM_B_6);
	}
	else if(topicState === "waking-up") {
		loadStems(WAKING_UP_STEM_B_1, WAKING_UP_STEM_B_2, WAKING_UP_STEM_B_3, WAKING_UP_STEM_B_4, WAKING_UP_STEM_B_5, WAKING_UP_STEM_B_6);
	}
	else if(topicState === "self-acceptance") {
		loadStems(SELF_ACCEPTANCE_STEM_B_1, SELF_ACCEPTANCE_STEM_B_2, SELF_ACCEPTANCE_STEM_B_3, SELF_ACCEPTANCE_STEM_B_4, SELF_ACCEPTANCE_STEM_B_5, SELF_ACCEPTANCE_STEM_B_6);
	}
	else if(topicState === "higher-self") {
		loadStems(HIGHER_SELF_STEM_B_1, HIGHER_SELF_STEM_B_2, HIGHER_SELF_STEM_B_3, HIGHER_SELF_STEM_B_4, HIGHER_SELF_STEM_B_5, HIGHER_SELF_STEM_B_6);
	}
	else if(topicState === "triumph-of-se") {
		loadStems(TRIUMPH_OF_SE_STEM_B_1, TRIUMPH_OF_SE_STEM_B_2, TRIUMPH_OF_SE_STEM_B_3, TRIUMPH_OF_SE_STEM_B_4, TRIUMPH_OF_SE_STEM_B_5, TRIUMPH_OF_SE_STEM_B_6);
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
	else if(topicState === "parental-influences") {
		loadStems(PARENTAL_INFLUENCES_STEM_C_1, PARENTAL_INFLUENCES_STEM_C_2, PARENTAL_INFLUENCES_STEM_C_3, PARENTAL_INFLUENCES_STEM_C_4, PARENTAL_INFLUENCES_STEM_C_5, PARENTAL_INFLUENCES_STEM_C_6);
	}
	startExercise();
}
const startExerciseD = function() {
	if(topicState === "parental-influences") {
		loadStems(PARENTAL_INFLUENCES_STEM_D_1, PARENTAL_INFLUENCES_STEM_D_2, PARENTAL_INFLUENCES_STEM_D_3, PARENTAL_INFLUENCES_STEM_D_4, PARENTAL_INFLUENCES_STEM_D_5, PARENTAL_INFLUENCES_STEM_D_6);
	}
	startExercise();
}
const startExerciseE = function() {
	if(topicState === "parental-influences") {
		loadStems(PARENTAL_INFLUENCES_STEM_E_1, PARENTAL_INFLUENCES_STEM_E_2, PARENTAL_INFLUENCES_STEM_E_3, PARENTAL_INFLUENCES_STEM_E_4, PARENTAL_INFLUENCES_STEM_E_5, PARENTAL_INFLUENCES_STEM_E_6);
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
	topicState = "";
}
const displayTopicButton = function () {
	//parental influences
	if(topicState === "beginning") {
		parentalButton.style.display = "block";
	}
	else if(topicState === "mother") {
		motherButton.style.display = "block";
		parentalButton.style.display = "block";
	}
	else if(topicState === "father") {
		fatherButton.style.display = "block";
		parentalButton.style.display = "block";
	}
	else if(topicState === "another-perspective") {
		parentalButton.style.display = "block";
	}
	//child teenage
	else if(topicState === "child") {
		childButton.style.display = "block";
		childTeenageButton.style.display = "block";
	}
	else if(topicState === "teenage") {
		teenageButton.style.display = "block";
		childTeenageButton.style.display = "block";
	}
	else if(topicState === "integration") {
		childTeenageButton.style.display = "block";
	}
	//negative
	else if(topicState === "pain") {
		painButton.style.display = "block";
		negativeButton.style.display = "block";
	}
	else if(topicState === "anger") {
		angerButton.style.display = "block";
		negativeButton.style.display = "block";
	}
	else if(topicState === "fear") {
		fearButton.style.display = "block";
		negativeButton.style.display = "block";
	}	
	else if(topicState === "envy") {		
		negativeButton.style.display = "block";
	}
	//positive
	else if(topicState === "happiness") {
		positiveButton.style.display = "block";
		happinessButton.style.display = "block";
	}
	else if(topicState === "love") {
		positiveButton.style.display = "block";
		loveButton.style.display = "block";
	}
	else if(topicState === "feeling-loved") {
		positiveButton.style.display = "block";
		feelingLovedButton.style.display = "block";
	}
	else if(topicState === "excitement") {
		positiveButton.style.display = "block";
		excitementButton.style.display = "block";
	}
	//exploring sexuality
	else if(topicState === "sexuality") {
		exploringSexualityButton.style.display = "block";
	}
	else if(topicState === "parental-influences") {
		exploringSexualityButton.style.display = "block";
		parentalInfluencesButton.style.display = "block";
	}
	else if(topicState === "opposite-sex") {
		exploringSexualityButton.style.display = "block";		
	}
	else if(topicState === "sex-and-spirit") {
		exploringSexualityButton.style.display = "block";		
	}
	//self-esteem
	else if(topicState === "early-messages") {
		selfEsteemButton.style.display = "block";
		earlyMessagesButton.style.display = "block";
	}
	else if(topicState === "behaviors-tase") {
		selfEsteemButton.style.display = "block";
		behaviorsTASE_Button.style.display = "block";
	}
	else if(topicState === "self-sabotage") {
		selfEsteemButton.style.display = "block";
		selfSabotageButton.style.display = "block";
	}
	else if(topicState === "waking-up") {
		selfEsteemButton.style.display = "block";
		wakingUpButton.style.display = "block";
	}
	else if(topicState === "self-acceptance") {
		selfEsteemButton.style.display = "block";
		selfAcceptanceButton.style.display = "block";
	}
	//sage-self
	else if(topicState === "higher-self") {
		sageSelfButton.style.display = "block";
		higherSelfButton.style.display = "block";
	}
	else if(topicState === "triumph-of-se") {
		sageSelfButton.style.display = "block";
		triumphOfSE_Button.style.display = "block";
	}
}
const exerciseComplete = function() {
	saveCurrentLeaf();	
	stopTimer();	
	resetPauseButton();	
	clearPage();
	displayResults();	
	homeButton.style.display = "block";
	displayTopicButton();
	saveButton.style.display = "block";
	resultsHeader.style.display = "block";
	resetValuesAtCompletion();
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
// Positive Feelings
positiveButton.addEventListener("click", initializePositive);
happinessButton.addEventListener("click", initializeHappiness);
loveButton.addEventListener("click", initializeLove);
feelingLovedButton.addEventListener("click", initializeFeelingLoved);
excitementButton.addEventListener("click", initializeExcitement);
// Sexuality
exploringSexualityButton.addEventListener("click", initializeExploringSexuality);
sexualityButton.addEventListener("click", initializeSexuality);
parentalInfluencesButton.addEventListener("click", initializeParentalInfluences);
oppositeSexButton.addEventListener("click", initializeOppositeSex);
sexAndSpiritButton.addEventListener("click", initializeSexAndSpirit);
// self esteem
selfEsteemButton.addEventListener("click", initializeSelfEsteem);
earlyMessagesButton.addEventListener("click", initializeEarlyMessages);
behaviorsTASE_Button.addEventListener("click", initializeBehaviorsTASE);
selfSabotageButton.addEventListener("click", initializeSelfSabotage);
wakingUpButton.addEventListener("click", initializeWakingUp);
selfAcceptanceButton.addEventListener("click", initializeSelfAcceptance);
// sage self
sageSelfButton.addEventListener("click", initializeSageSelf);
higherSelfButton.addEventListener("click", initializeHigherSelf);
triumphOfSE_Button.addEventListener("click", initializeTriumphOfSE);
// random
randomButton.addEventListener("click", initializeRandom);
//start buttons
startButton.addEventListener("click", startExercise);
startButtonA.addEventListener("click", startExerciseA);
startButtonB.addEventListener("click", startExerciseB);
startButtonC.addEventListener("click", startExerciseC);
startButtonD.addEventListener("click", startExerciseD);
startButtonE.addEventListener("click", startExerciseE);
//
pauseButton.addEventListener("click", toggleTimer);
nextButton.addEventListener("click", nextStem);
saveButton.addEventListener("click", saveResults);

const handleInitialZoom = function() {
	document.body.style.zoom = "100%";	
}

window.onload = handleInitialZoom();