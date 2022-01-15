// 강의 엔티티

// 페이지 제목
let subtitle = '' 
let title = ''
// 프레지
let item0SrcList = []
let item0NameList = []
let item0ContentList = []
let item0StatusList = []
let item0HrefList = []
let item0LinkNameList = []
// 구독
let item1HrefList = []
let item1SubnameList = []
let item1NameList = []
let item1ButtonNameList = []

// 한국어의 경우
if (language == 'ko') {
    // 페이지 제목
    subtitle = '유투브 채널・플레이리스트'
    title = '유투브'
    // 프레지
    item0SrcList.push('https://prezi.com/embed/znxavwpavwpm/')
    item0NameList.push('유투브 Playlist')
    item0ContentList.push('Front-end')
    item0StatusList.push('Back-end')
    item0HrefList.push('https://www.youtube.com/c/CodingCafe1')
    item0LinkNameList.push(' &nbsp;Channel')
    // 구독
    item1SubnameList.push('코딩카페의 모든 강의를 무료로 학습하세요.')
    item1NameList.push('유투브 채널「코딩카페」')
    item1HrefList.push('https://www.youtube.com/channel/UCt76J5CYnXL-uoJmQPG2Azw')
    item1ButtonNameList.push('구독')
}

// 일본어의 경우
if (language == 'ja') {
    // 페이지 제목
    subtitle = 'チャンネル・リスト'
    title = 'ユーチューブ'
    // 프레지
    item0SrcList.push('https://prezi.com/embed/znxavwpavwpm/')
    item0NameList.push('ユーチューブ Playlist')
    item0ContentList.push('Front-end')
    item0StatusList.push('Back-end')
    item0HrefList.push('https://www.youtube.com/c/CodingCafe1')
    item0LinkNameList.push(' &nbsp;Channel')
    // 구독
    item1SubnameList.push('コーディングカフェのすべての講義を無料で学びましょう。')
    item1NameList.push('YOUTUBEチャンネル「コーディングカフェ」')
    item1HrefList.push('https://www.youtube.com/channel/UCt76J5CYnXL-uoJmQPG2Azw')
    item1ButtonNameList.push('購読')
}