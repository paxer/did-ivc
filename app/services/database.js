import Service from '@ember/service';

export default Service.extend({
  quotes: null,

  init() {
    let quotes = [
      "Полная коллекция Дед ИВЦ - Дед ИВЦ(2004-2010)",
      "а сколько это будет стоить",
      "а, ведь я так и понял, что мудила",
      "аа",
      "адвокат - это тот же гад",
      "башка твоя с плеч на этой неделе отлетает как кочан капусты",
      "без респисраторов",
      "больше так себя вести",
      "будешь как змеюга на сковородке крутиться",
      "бух бух бух",
      "бухало, заткни свое вонючее ебало",
      "бухало, нахуярился уже",
      "бухало, ты все бухАешь, блядь",
      "в каком положении вы находитесь",
      "в общем кончай звонить, потому что все на пленке",
      "вам рассказывали наверное",
      "вам спасибо",
      "ветеринар уже давно погиб",
      "вещи сопряжены",
      "видеонаблюдение",
      "вот теперь узнаешь",
      "вот этой шарманкой я те размозжу там башку",
      "вот я те послеобеденный перерыв устрою",
      "все узнаешь, причем так узнаешь",
      "вся ваша кедовская республика под колпаком",
      "вы понимаете о чем я говорю о жизни",
      "вы посмотрите на моего юношу",
      "вы руслана знаете",
      "высочайший праздник",
      "высшая мера наказания",
      "выхожу на прямую связь",
      "газовое хозяйство",
      "говорить общатся",
      "группа захвата слушает вас",
      "да да - уже все",
      "да, дежурный, 127-ое",
      "да, и где ты базируешься я уже засек",
      "да, слушаю вас",
      "да",
      "давай мы его трижды поцелуем",
      "дай два рубля до второго",
      "девочка моя родная",
      "диких зверей",
      "до чего они жалкие",
      "добрые хорошие люди",
      "дурень ты чертовый, говноед ты ебучий, подавись сучонок говном",
      "дядя а ты чего выпендриваешься",
      "ебучая тварь, я тебя покажу по телевизору",
      "жизнь только держись",
      "жизнь это не сказка",
      "забота о нас о ветеранах",
      "заеба сраная, опять за трубку берешься",
      "замолчи негодяй",
      "заткни ебало, зараза ебучая",
      "здорово",
      "и вдруг вы приходите",
      "и вот теперь вы говорите с этим молодым человеком",
      "и запомни - потом крокодиловых слез",
      "и по телевидению фильм покажу",
      "и ты знаешь, что ты под колпаком",
      "и хлопали и плакали",
      "и хочется и колется",
      "информационно-вычислительный центр",
      "ипотека должна служить вам",
      "ипотека",
      "как дела - еще не родила",
      "как это хорошо как это замечатльено",
      "кооператив ПИЗДЕЦ",
      "кооператоры проклятые",
      "красиво это или нет",
      "кредит",
      "лучшего праздника",
      "люди безответственные",
      "люди заботливых пожилых людей взаимностью",
      "мало, а может хватит",
      "маскируешься под маской крокодила",
      "междугородняя - бухало блядь вылез опять",
      "можно вас попросить о другом",
      "мы обязаны справится",
      "не беспокойтесь",
      "не зарабатываем",
      "не на словах а на деле",
      "не надо кредитов",
      "не надо мне",
      "не покладая рук",
      "не принимаю",
      "не сторонник дерганий",
      "нельзя этого делать",
      "ни спать не буду ни есть",
      "ни спать ни есть",
      "ну заслуженые люди все",
      "ну разные люди бывают",
      "ну что молчишь",
      "ну что такое время совершенно верно",
      "ну, сука ебаная",
      "обезопасить случайностей",
      "обыватели, ищут эти помойки",
      "они не понимают этого",
      "опережаю график",
      "опережающее чувство отвественности",
      "отношение самое прекрасное",
      "очень тяжело",
      "песнями участием",
      "поддержка помощ",
      "пожалуйста, прекрати эти звонки",
      "посмотри в зеркало, ебучая ты тварюга, жертва неудачного аборта",
      "посмотрите какой он замечательный специалист",
      "поставите аппаратуру",
      "потихонечку сколько есть сил",
      "почему вы мне не доложили раньше",
      "пошел вон отсюда зараза",
      "пошел вон",
      "пошел отсюда вон, зараза ебучая",
      "путин собянин картина",
      "путь на погост",
      "радуюсь и хлопаю в ладоши",
      "разве это дело",
      "рассуждаешь учись будь внимательным",
      "родина",
      "с командиром разговаривал",
      "с превеликим удовольствием",
      "салажонок, вонючая ты падла",
      "святость не продавалась",
      "святость",
      "сколько раз тебе говорить, долбоебина",
      "слезы на глазах",
      "сомнительные заработки",
      "спасибо браться за то что вы у нас есть",
      "спасибо за помощ за поддержку",
      "спортивная зараза бля",
      "сука поганая, твари ебучие",
      "сучонок, посмотри сколько время, негодяй",
      "сынуль очень много работы",
      "сыны герои лечится бесплатно",
      "сыны отечества",
      "таскать вас будут пока дно из жопы не выбьют",
      "тварюга поганая, всех вас передавлю, как клопов",
      "тебе значит таким образом, баржа",
      "тебе ответили, ишь ты зараза подлючая",
      "тебе поздно, сука, всегда будет",
      "тебя и ловить-то нечего, тебя под колпаком давно держат",
      "то что я могу я на это иду",
      "товарищи подключены",
      "труженик великий отношение",
      "тут приезжали два твооих друга на велосипедах",
      "тут сегодня приезжали на велосипедах",
      "ты больше с Атлантики никогда не выйдешь",
      "ты вывихнутый по всем осям и параметрам",
      "ты дурачок, ты еще не совсем вывихнулся",
      "ты же есть подонок низкопробный",
      "ты зараза поганая, ты уже приехал",
      "ты знаешь что она вообще, куда ты залез",
      "ты знаешь что она на учете",
      "ты знаешь что она припадочная и сифилисная",
      "ты когда приедешь роднулик",
      "ты мне еще замечания будешь делать",
      "ты опять все-таки выходишь в эфир, подлец",
      "ты опять выходишь на связь, мудила",
      "ты опять-то лазишь, ты, ебанашка",
      "ты подлючка, ты знаешь, что ты вместе с алкоголичкой будешь судим",
      "ты поняла, дура",
      "ты сука знаешь с кем говоришь",
      "ты сучонок, я щас приеду и задавлю тебя, сука",
      "ты, агрика ебаная",
      "ты, ебанашка",
      "ты, мудила ебаный, ну и готов ты, спекся",
      "ты, сволота блядь, этааа, лохматая",
      "у вас в сарае",
      "фарцовщик ты ебучий низкопробный, дрань ты поганая",
      "хорошо, да, видишь какое дело - ты сам себя опровергаешь",
      "хуй на",
      "хуяйцевых, мудила",
      "чам чам чам чам чам чам",
      "честно работаете",
      "что - блядь на фальцет перешел сучонок",
      "что алекаешь",
      "что здрасте, что здрасте здесь опять суешься",
      "что им делать что-ли нечего",
      "чудесный чудесный специалист",
      "шарманку низкопробную подсовывает",
      "щас тебе поздравление будет великолепное",
      "щас я тя повяжу, сучонок",
      "это что такое",
      "я говорю за все сука надо платить",
      "я заслуженый человек",
      "я мужчина моряк",
      "я нахожусь на даче",
      "я не буду с вами тут разглогольствовать",
      "я не пью не курю не гуляю",
      "я те голову оторву немедленно",
      "я те голову оторву, я на это согласен",
      "я те как флотский человек говорю",
      "я те сказал, я тя там залупцую до смерти",
      "я те там из жопы ноги-руки выдергаю",
      "я те щас дам из материального училища",
      "я тебе голову оторву на это, тебе, дружкам твоим",
      "я тебе дам 3К-4К",
      "я тебе дам ветеринар блядь",
      "я тебя предупредил",
      "я тебя у агрики поймаю",
      "японцу отдай магнитофон"
    ];

    this.set('quotes', quotes);
    this._super(...arguments);
  }
});
