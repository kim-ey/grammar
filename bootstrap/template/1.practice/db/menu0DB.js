// 소개 엔티티 

// 아이템 제목
let itemTitleList = []
// 아이템0
let item0IconList = []
let item0NameList = []
let item0HrefList = []
// 아이템1
let item1NameList = []
let item1ContentList = []
// 아이템2
let item2NameList = []
let item2ContentList = []
// 아이템3
let item3NameList = []
let item3ContentList = []
let today = null
let dateString = null
let dateArray = null
let dateObj = null
let betweenDay = null
// 아이템4
let item4IconList = []
let item4NameList = []
let item4ContentList = []

// 한국어의 경우
if (language == 'ko') {
    // 아이템제목
    itemTitleList.push('개발자 주요링크')
    itemTitleList.push('개발자 소개')
    itemTitleList.push('메인언어')
    itemTitleList.push('자동 이정표')
    // 아이템0 : icon.html 참조
    item0IconList.push('icon-smartphone')
    item0IconList.push('icon-play-button')
    item0IconList.push('icon-favorites')
    item0IconList.push('icon-cloud')
    item0NameList.push('연락처')
    item0NameList.push('유투브')
    item0NameList.push('깃허브')
    item0NameList.push('스킬시트')
    item0HrefList.push('menu3.html')
    item0HrefList.push('https://www.youtube.com/c/CodingCafe1')
    item0HrefList.push('https://github.com/azumaapp')
    item0HrefList.push('https://docs.google.com/spreadsheets/d/1K6zeowhIPLv2ZU4sfpQqwWXwOCbIJ1Z3/edit?rtpof=true#gid=214401444')
    // 아이템1
    item1NameList.push('Q. 자기소개?')
    item1NameList.push('Q. 왜 프로그래머입니까?')
    item1NameList.push('Q. 당신의 강점은 무엇입니까?')
    item1NameList.push('사이트 소개')
    item1NameList.push('소지 자격증')
    item1NameList.push('메인 언어')
    item1ContentList.push('안녕하세요! 웹 프로그래머로 활동하고 있는 필명 「Azuma」라고 합니다. 한국으로부터 왔습니다. 현재는 도쿄에서 개발자로 근무하고 있습니다.')
    item1ContentList.push('저는 어렸을 때부터 프로그래머가 되고 싶다는 꿈이 있었습니다. 또, 해외의 생활에도 동경을 계속 안고 있었습니다. 자신이 하고 싶은 것을 추구하면서도, 보다 더 사회에 공헌하는, 즉 인간을 이롭게 하는 프로그램을 만들고자 프로그래머에 대한 진로를 결정하였습니다.')
    item1ContentList.push('저의 강점은 다음과 같습니다. ・코딩 : 소프트뱅크 5G, 엔터테인먼트, 국내법인, 일본정부기관 등의 다양한 분야의 프로젝트 경험 ・어학 : 영어 수능 1등급, 무역영어 1급 외 어학자격증 4개 소지 ・교육 : 유명과외강사, 6년간 고교교사경력')
    item1ContentList.push('이 홈페이지의 주 목적은 저의 포트폴리오를 전시해 보여드리는 것입니다. 그 외에도 교육, 청부업무, 미니프로젝트의 수주등 다양한 프로그램을 안내하기도 합니다.')
    item1ContentList.push('Azure AZ900・TOEIC 955・AWS・Business English - First Grade・Word Processor - First Grade・정보처리기사・영어정교사・스노우보드지도・영한번역사')
    item1ContentList.push('메인언어는 Javascript, Java, Python, PHP・프레임워크는 Bootstrap, Vuejs, Springboot, Flask 등 입니다.')
    // 아이템2
    item2NameList.push('Javasript')
    item2NameList.push('Java')
    item2NameList.push('Python')
    item2NameList.push('PHP')
    item2ContentList.push('95%')
    item2ContentList.push('75%')
    item2ContentList.push('50%')
    item2ContentList.push('25%')
    // 아이템3
    item3NameList.push('년 기준')
    item3NameList.push('살')
    item3NameList.push('개발연차')
    item3NameList.push('개발개월')
    item3NameList.push('사이트 개설기간')
    item3NameList.push('추정 학습시간')    
    item3ContentList.push(new Date().getFullYear() + 'y') // 기준연도
    item3ContentList.push(new Date().getFullYear() - 1987 + 'y') // 나이 계산
    item3ContentList.push(new Date().getFullYear() - 2017 + 'y') // 개발연차 계산    
    today = new Date()
    dateString = "2017-01-01" // 개발개월 계산
    dateArray = dateString.split("-")
    dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
    betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24/30.5
    item3ContentList.push(Math.round(betweenDay) + 'm')
    dateString = "2019-08-18" // 사이트개설기간 계산
    dateArray = dateString.split("-")
    dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
    betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24
    item3ContentList.push(Math.round(betweenDay) + 'd')
    dateString = "2017-01-01" // 공부시간 계산
    dateArray = dateString.split("-")
    dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
    betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/4 // 마지막 숫자가 일당 공부한 시간 (예: 하루 3시간 공부할 경우 24 나누기 3 = 8)
    item3ContentList.push(Math.round(betweenDay) + 'h')
}

// 일본어의 경우
if (language == 'ja') {
    // 아이템제목
    itemTitleList.push('リンク')
    itemTitleList.push('開発者について')
    itemTitleList.push('メイン言語')
    itemTitleList.push('自動マイルストーン')
    // 아이템0 : icon.html 참조
    item0IconList.push('icon-smartphone')
    item0IconList.push('icon-play-button')
    item0IconList.push('icon-favorites')
    item0IconList.push('icon-cloud')
    item0NameList.push('連絡先')
    item0NameList.push('Youtube')
    item0NameList.push('Github')
    item0NameList.push('スキルシート')
    item0HrefList.push('menu3.html')
    item0HrefList.push('https://www.youtube.com/c/CodingCafe1')
    item0HrefList.push('https://github.com/azumaapp')
    item0HrefList.push('https://docs.google.com/spreadsheets/d/1K6zeowhIPLv2ZU4sfpQqwWXwOCbIJ1Z3/edit?rtpof=true#gid=214401444')
    // 아이템1
    item1NameList.push('Q. 自己紹介？')
    item1NameList.push('Q. なぜプログラマーですか？')
    item1NameList.push('Q. 強みは何ですか？')
    item1NameList.push('サイト紹介')
    item1NameList.push('資格証')
    item1NameList.push('メイン言語')
    item1ContentList.push('こんにちは！Webプログラマーの「Azuma」です。韓国から来ました。東京で開発者として働いています。')
    item1ContentList.push('私は幼い頃からプログラマーになりたいという夢がありました。また、海外の生活にも憧れを抱いていました。自分がやりたいことを追求しながらも、より社会に貢献し、つまり人間の生活を便利にするプログラムを作ろうと思っております。')
    item1ContentList.push('私の強みは次のとおりです。・コーディング：5G・LTE電波プロヴァイダー、エンターテイメント、国内法人、日本政府機関などの多様な分野のプロジェクトに参加しております。6年間教師のキャリアも持っています。')
    item1ContentList.push('このホームページの主な目的は私のポートフォリオを展示してお見せする為に作っております。')
    item1ContentList.push('Azure AZ900・TOEIC 955・AWS・Business English - First Grade・Word Processor - First Grade・情報処理記事・英語精教師・スノーボードマップ・英訳')
    item1ContentList.push('メイン言語はJavascript、Java、Python、PHP・フレームワークはBootstrap、Vuejs、Springboot、Flaskなどです。')
    // 아이템2
    item2NameList.push('Javasript')
    item2NameList.push('Java')
    item2NameList.push('Python')
    item2NameList.push('PHP')
    item2ContentList.push('95%')
    item2ContentList.push('75%')
    item2ContentList.push('50%')
    item2ContentList.push('25%')
    // 아이템3
    item3NameList.push('年基準')
    item3NameList.push('歳')
    item3NameList.push('開発年次')
    item3NameList.push('開発月次')
    item3NameList.push('サイト開設期間')
    item3NameList.push('推定学習時間')    
    item3ContentList.push(new Date().getFullYear() + 'y') // 기준연도
    item3ContentList.push(new Date().getFullYear() - 1987 + 'y') // 나이 계산
    item3ContentList.push(new Date().getFullYear() - 2017 + 'y') // 개발연차 계산    
    today = new Date() // 개발개월 계산
    dateString = "2017-01-01"
    dateArray = dateString.split("-")
    dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
    betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24/30.5
    item3ContentList.push(Math.round(betweenDay) + 'm')
    dateString = "2019-08-18" // 사이트개설기간 계산
    dateArray = dateString.split("-")
    dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
    betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24
    item3ContentList.push(Math.round(betweenDay) + 'd')
    dateString = "2017-01-01" // 공부시간 계산
    dateArray = dateString.split("-")
    dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
    betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/4 // 마지막 숫자가 일당 공부한 시간 (예: 하루 3시간 공부할 경우 24 나누기 3 = 8)
    item3ContentList.push(Math.round(betweenDay) + 'h')
}