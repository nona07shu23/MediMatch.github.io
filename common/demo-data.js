// ===============================================
// MediMatch デモデータ
// ===============================================

// デモアカウント情報
const DEMO_ACCOUNTS = {
    doctor: {
        email: 'doctor@demo.medimatch.jp',
        password: 'demo1234',
        name: '山田太郎医師'
    },
    facility: {
        email: 'facility@demo.medimatch.jp',
        password: 'demo1234',
        name: '東京総合病院'
    }
};

// 診療科マスターデータ
const SPECIALTIES = [
    '内科', '外科', '整形外科', '産婦人科', '小児科',
    '皮膚科', '眼科', '耳鼻咽喉科', '泌尿器科', '精神科',
    '脳神経外科', '心臓血管外科', '消化器内科', '循環器内科',
    '呼吸器内科', '放射線科', '麻酔科', '救急科', 'リハビリテーション科'
];

// 都道府県リスト
const PREFECTURES = [
    '東京都', '神奈川県', '千葉県', '埼玉県', '大阪府', 
    '愛知県', '兵庫県', '福岡県', '北海道', '宮城県'
];

// 医師デモデータ（20件）
const DEMO_DOCTORS = [
    {
        id: 'doc001',
        name: '佐藤健一',
        age: 38,
        specialty: '内科',
        subSpecialty: '消化器内科',
        certifications: ['内科専門医', '消化器病専門医', '消化器内視鏡専門医'],
        skills: ['上部消化管内視鏡', '下部消化管内視鏡', 'ERCP'],
        experience: 15,
        caseCount: 1200,
        preferredLocations: ['東京都', '神奈川県'],
        employmentTypes: ['非常勤', 'スポット'],
        minHourlyRate: 12000,
        availability: true,
        profileImage: null,
        bio: '消化器内科を専門とし、内視鏡検査・治療を得意としています。'
    },
    {
        id: 'doc002',
        name: '田中美咲',
        age: 35,
        specialty: '小児科',
        subSpecialty: '小児アレルギー科',
        certifications: ['小児科専門医', 'アレルギー専門医'],
        skills: ['小児診療', 'アレルギー診療', '予防接種'],
        experience: 12,
        caseCount: 800,
        preferredLocations: ['東京都'],
        employmentTypes: ['常勤', '非常勤'],
        minHourlyRate: 10000,
        availability: true,
        profileImage: null,
        bio: '小児科全般とアレルギー疾患の診療を行っています。'
    },
    {
        id: 'doc003',
        name: '鈴木誠',
        age: 42,
        specialty: '整形外科',
        subSpecialty: 'スポーツ整形外科',
        certifications: ['整形外科専門医', 'スポーツ専門医'],
        skills: ['関節鏡手術', '骨折治療', 'スポーツ外傷'],
        experience: 18,
        caseCount: 1500,
        preferredLocations: ['神奈川県', '東京都'],
        employmentTypes: ['常勤'],
        minHourlyRate: 15000,
        availability: false,
        profileImage: null,
        bio: 'スポーツ整形外科を専門とし、関節鏡手術を得意としています。'
    },
    {
        id: 'doc004',
        name: '高橋由美',
        age: 40,
        specialty: '産婦人科',
        subSpecialty: '周産期医療',
        certifications: ['産婦人科専門医', '周産期専門医'],
        skills: ['分娩管理', '帝王切開', '産科超音波'],
        experience: 16,
        caseCount: 900,
        preferredLocations: ['千葉県'],
        employmentTypes: ['常勤', '非常勤'],
        minHourlyRate: 13000,
        availability: true,
        profileImage: null,
        bio: '周産期医療を専門とし、安全な分娩管理に努めています。'
    },
    {
        id: 'doc005',
        name: '伊藤拓也',
        age: 45,
        specialty: '外科',
        subSpecialty: '消化器外科',
        certifications: ['外科専門医', '消化器外科専門医', '内視鏡外科技術認定医'],
        skills: ['腹腔鏡手術', '消化器がん手術', '胆嚢摘出術'],
        experience: 20,
        caseCount: 2000,
        preferredLocations: ['東京都'],
        employmentTypes: ['常勤'],
        minHourlyRate: 18000,
        availability: false,
        profileImage: null,
        bio: '消化器外科を専門とし、腹腔鏡手術を中心に行っています。'
    },
    {
        id: 'doc006',
        name: '渡辺真理',
        age: 33,
        specialty: '皮膚科',
        subSpecialty: '美容皮膚科',
        certifications: ['皮膚科専門医'],
        skills: ['一般皮膚科', 'レーザー治療', '美容皮膚科'],
        experience: 9,
        caseCount: 600,
        preferredLocations: ['東京都', '神奈川県'],
        employmentTypes: ['非常勤', 'スポット'],
        minHourlyRate: 11000,
        availability: true,
        profileImage: null,
        bio: '一般皮膚科から美容皮膚科まで幅広く対応しています。'
    },
    {
        id: 'doc007',
        name: '山本健太',
        age: 50,
        specialty: '脳神経外科',
        subSpecialty: '脳血管内治療',
        certifications: ['脳神経外科専門医', '脳血管内治療専門医'],
        skills: ['脳血管内治療', '開頭手術', '脳卒中診療'],
        experience: 25,
        caseCount: 2500,
        preferredLocations: ['大阪府'],
        employmentTypes: ['常勤'],
        minHourlyRate: 20000,
        availability: false,
        profileImage: null,
        bio: '脳血管内治療を専門とし、脳卒中の診療を行っています。'
    },
    {
        id: 'doc008',
        name: '中村亜希子',
        age: 36,
        specialty: '精神科',
        subSpecialty: '児童精神科',
        certifications: ['精神科専門医', '精神保健指定医'],
        skills: ['精神療法', '薬物療法', 'カウンセリング'],
        experience: 11,
        caseCount: 700,
        preferredLocations: ['東京都', '埼玉県'],
        employmentTypes: ['常勤', '非常勤'],
        minHourlyRate: 11000,
        availability: true,
        profileImage: null,
        bio: '児童から成人まで幅広く精神科診療を行っています。'
    },
    {
        id: 'doc009',
        name: '小林大輔',
        age: 39,
        specialty: '循環器内科',
        subSpecialty: '心臓カテーテル',
        certifications: ['内科専門医', '循環器専門医'],
        skills: ['心臓カテーテル検査', 'PCI', '心エコー'],
        experience: 14,
        caseCount: 1100,
        preferredLocations: ['愛知県'],
        employmentTypes: ['常勤'],
        minHourlyRate: 14000,
        availability: true,
        profileImage: null,
        bio: '循環器内科を専門とし、心臓カテーテル治療を得意としています。'
    },
    {
        id: 'doc010',
        name: '加藤麻衣',
        age: 34,
        specialty: '眼科',
        subSpecialty: '白内障・緑内障',
        certifications: ['眼科専門医'],
        skills: ['白内障手術', '緑内障治療', '眼底検査'],
        experience: 10,
        caseCount: 800,
        preferredLocations: ['東京都'],
        employmentTypes: ['非常勤', 'スポット'],
        minHourlyRate: 12000,
        availability: true,
        profileImage: null,
        bio: '白内障・緑内障を中心に眼科診療を行っています。'
    },
    {
        id: 'doc011',
        name: '松本隆志',
        age: 48,
        specialty: '麻酔科',
        subSpecialty: '集中治療',
        certifications: ['麻酔科専門医', '集中治療専門医'],
        skills: ['全身麻酔', '硬膜外麻酔', '集中治療管理'],
        experience: 22,
        caseCount: 3000,
        preferredLocations: ['神奈川県', '東京都'],
        employmentTypes: ['非常勤', 'スポット'],
        minHourlyRate: 16000,
        availability: true,
        profileImage: null,
        bio: '麻酔科と集中治療を専門としています。'
    },
    {
        id: 'doc012',
        name: '吉田奈々',
        age: 31,
        specialty: '耳鼻咽喉科',
        subSpecialty: '頭頸部外科',
        certifications: ['耳鼻咽喉科専門医'],
        skills: ['内視鏡手術', '中耳手術', '扁桃摘出術'],
        experience: 7,
        caseCount: 450,
        preferredLocations: ['千葉県'],
        employmentTypes: ['常勤', '非常勤'],
        minHourlyRate: 10000,
        availability: true,
        profileImage: null,
        bio: '耳鼻咽喉科全般の診療を行っています。'
    },
    {
        id: 'doc013',
        name: '木村慎一',
        age: 43,
        specialty: '泌尿器科',
        subSpecialty: '泌尿器がん',
        certifications: ['泌尿器科専門医', 'がん治療認定医'],
        skills: ['前立腺がん手術', '腎がん手術', '膀胱がん治療'],
        experience: 18,
        caseCount: 1400,
        preferredLocations: ['大阪府'],
        employmentTypes: ['常勤'],
        minHourlyRate: 15000,
        availability: false,
        profileImage: null,
        bio: '泌尿器がんを専門とし、手術治療を中心に行っています。'
    },
    {
        id: 'doc014',
        name: '林優子',
        age: 37,
        specialty: '呼吸器内科',
        subSpecialty: '気管支鏡',
        certifications: ['内科専門医', '呼吸器専門医', '気管支鏡専門医'],
        skills: ['気管支鏡検査', '肺がん診療', '喘息治療'],
        experience: 13,
        caseCount: 900,
        preferredLocations: ['東京都', '神奈川県'],
        employmentTypes: ['非常勤'],
        minHourlyRate: 12000,
        availability: true,
        profileImage: null,
        bio: '呼吸器疾患全般の診療を行っています。'
    },
    {
        id: 'doc015',
        name: '清水健二',
        age: 41,
        specialty: '放射線科',
        subSpecialty: '画像診断',
        certifications: ['放射線科専門医', '放射線診断専門医'],
        skills: ['CT読影', 'MRI読影', 'IVR'],
        experience: 16,
        caseCount: 5000,
        preferredLocations: ['愛知県'],
        employmentTypes: ['常勤', '非常勤'],
        minHourlyRate: 13000,
        availability: true,
        profileImage: null,
        bio: '画像診断を専門とし、正確な読影を心がけています。'
    },
    {
        id: 'doc016',
        name: '森田さくら',
        age: 29,
        specialty: '救急科',
        subSpecialty: '救急集中治療',
        certifications: ['救急科専門医'],
        skills: ['救急初期対応', '外傷診療', 'ACLS'],
        experience: 5,
        caseCount: 400,
        preferredLocations: ['東京都'],
        employmentTypes: ['非常勤', 'スポット'],
        minHourlyRate: 15000,
        availability: true,
        profileImage: null,
        bio: '救急医療を専門とし、初期対応を得意としています。'
    },
    {
        id: 'doc017',
        name: '池田裕介',
        age: 46,
        specialty: 'リハビリテーション科',
        subSpecialty: '脳卒中リハビリ',
        certifications: ['リハビリテーション科専門医'],
        skills: ['リハビリテーション処方', 'ADL評価', '装具処方'],
        experience: 20,
        caseCount: 1800,
        preferredLocations: ['神奈川県'],
        employmentTypes: ['常勤'],
        minHourlyRate: 11000,
        availability: false,
        profileImage: null,
        bio: '脳卒中リハビリテーションを専門としています。'
    },
    {
        id: 'doc018',
        name: '石井恵美',
        age: 32,
        specialty: '心臓血管外科',
        subSpecialty: '冠動脈バイパス術',
        certifications: ['外科専門医', '心臓血管外科専門医'],
        skills: ['冠動脈バイパス術', '弁膜症手術', 'ステントグラフト'],
        experience: 8,
        caseCount: 350,
        preferredLocations: ['大阪府', '兵庫県'],
        employmentTypes: ['常勤'],
        minHourlyRate: 17000,
        availability: true,
        profileImage: null,
        bio: '心臓血管外科を専門とし、冠動脈バイパス術を中心に行っています。'
    },
    {
        id: 'doc019',
        name: '橋本太一',
        age: 44,
        specialty: '消化器内科',
        subSpecialty: '肝臓病',
        certifications: ['内科専門医', '消化器病専門医', '肝臓専門医'],
        skills: ['肝疾患診療', '腹部エコー', '肝生検'],
        experience: 19,
        caseCount: 1600,
        preferredLocations: ['福岡県'],
        employmentTypes: ['常勤'],
        minHourlyRate: 14000,
        availability: false,
        profileImage: null,
        bio: '肝臓病を専門とし、肝炎・肝硬変の診療を行っています。'
    },
    {
        id: 'doc020',
        name: '藤田直子',
        age: 35,
        specialty: '産婦人科',
        subSpecialty: '婦人科腫瘍',
        certifications: ['産婦人科専門医', '婦人科腫瘍専門医'],
        skills: ['婦人科がん手術', '腹腔鏡手術', '化学療法'],
        experience: 11,
        caseCount: 550,
        preferredLocations: ['東京都', '埼玉県'],
        employmentTypes: ['常勤', '非常勤'],
        minHourlyRate: 13000,
        availability: true,
        profileImage: null,
        bio: '婦人科腫瘍を専門とし、低侵襲手術に取り組んでいます。'
    }
];

// 求人デモデータ（20件）
const DEMO_JOBS = [
    {
        id: 'job001',
        facilityName: '東京総合病院',
        facilityType: '総合病院',
        title: '内科医師（常勤）募集',
        specialty: '内科',
        employmentType: '常勤',
        description: '総合内科の常勤医師を募集しています。外来・病棟管理をお願いします。',
        location: '東京都港区',
        prefecture: '東京都',
        salaryType: '年収',
        salaryMin: 1200,
        salaryMax: 1800,
        workDays: '週5日（月～金）',
        onCallRequired: true,
        benefits: ['社会保険完備', '住宅手当', '学会参加支援'],
        postedDate: '2026-01-05',
        status: 'published',
        views: 156,
        applications: 8
    },
    {
        id: 'job002',
        facilityName: 'さくらクリニック',
        facilityType: 'クリニック',
        title: '小児科医師（非常勤・週2日）',
        specialty: '小児科',
        employmentType: '非常勤',
        description: '小児科外来診療を担当していただきます。週2日勤務可能な方を募集します。',
        location: '東京都世田谷区',
        prefecture: '東京都',
        salaryType: '時給',
        salaryMin: 10000,
        salaryMax: 12000,
        workDays: '週2日（火・木）',
        onCallRequired: false,
        benefits: ['交通費支給'],
        postedDate: '2026-01-08',
        status: 'published',
        views: 89,
        applications: 5
    },
    {
        id: 'job003',
        facilityName: '横浜整形外科病院',
        facilityType: '専門病院',
        title: '整形外科医師（常勤）',
        specialty: '整形外科',
        employmentType: '常勤',
        description: '整形外科の外来・手術を担当していただきます。スポーツ整形経験者歓迎。',
        location: '神奈川県横浜市',
        prefecture: '神奈川県',
        salaryType: '年収',
        salaryMin: 1500,
        salaryMax: 2000,
        workDays: '週5日',
        onCallRequired: true,
        benefits: ['社会保険完備', '住宅手当', '車通勤可'],
        postedDate: '2026-01-03',
        status: 'published',
        views: 203,
        applications: 12
    },
    {
        id: 'job004',
        facilityName: '千葉産婦人科医院',
        facilityType: 'クリニック',
        title: '産婦人科医師（非常勤・週3日）',
        specialty: '産婦人科',
        employmentType: '非常勤',
        description: '産婦人科外来診療を担当していただきます。分娩なし。',
        location: '千葉県千葉市',
        prefecture: '千葉県',
        salaryType: '日給',
        salaryMin: 80000,
        salaryMax: 100000,
        workDays: '週3日（月・水・金）',
        onCallRequired: false,
        benefits: ['交通費支給', '駐車場完備'],
        postedDate: '2026-01-06',
        status: 'published',
        views: 112,
        applications: 7
    },
    {
        id: 'job005',
        facilityName: '東京メディカルセンター',
        facilityType: '総合病院',
        title: '消化器外科医師（常勤）',
        specialty: '外科',
        employmentType: '常勤',
        description: '消化器外科の手術・外来を担当していただきます。腹腔鏡手術経験者優遇。',
        location: '東京都新宿区',
        prefecture: '東京都',
        salaryType: '年収',
        salaryMin: 1800,
        salaryMax: 2500,
        workDays: '週5日',
        onCallRequired: true,
        benefits: ['社会保険完備', '住宅手当', '学会参加支援', '専門医取得支援'],
        postedDate: '2026-01-04',
        status: 'published',
        views: 178,
        applications: 9
    },
    {
        id: 'job006',
        facilityName: '青山皮膚科クリニック',
        facilityType: 'クリニック',
        title: '皮膚科医師（スポット・土曜日のみ）',
        specialty: '皮膚科',
        employmentType: 'スポット',
        description: '土曜日の皮膚科外来診療を担当していただきます。',
        location: '東京都港区',
        prefecture: '東京都',
        salaryType: '日給',
        salaryMin: 70000,
        salaryMax: 80000,
        workDays: '土曜日のみ',
        onCallRequired: false,
        benefits: ['交通費支給'],
        postedDate: '2026-01-09',
        status: 'published',
        views: 95,
        applications: 11
    },
    {
        id: 'job007',
        facilityName: '大阪脳神経外科病院',
        facilityType: '専門病院',
        title: '脳神経外科医師（常勤）',
        specialty: '脳神経外科',
        employmentType: '常勤',
        description: '脳神経外科の手術・外来を担当していただきます。脳血管内治療経験者優遇。',
        location: '大阪府大阪市',
        prefecture: '大阪府',
        salaryType: '年収',
        salaryMin: 2000,
        salaryMax: 2800,
        workDays: '週5日',
        onCallRequired: true,
        benefits: ['社会保険完備', '住宅手当', '学会参加支援'],
        postedDate: '2026-01-02',
        status: 'published',
        views: 245,
        applications: 6
    },
    {
        id: 'job008',
        facilityName: 'こころメンタルクリニック',
        facilityType: 'クリニック',
        title: '精神科医師（非常勤・週2日）',
        specialty: '精神科',
        employmentType: '非常勤',
        description: '精神科外来診療を担当していただきます。児童精神科経験者歓迎。',
        location: '東京都渋谷区',
        prefecture: '東京都',
        salaryType: '時給',
        salaryMin: 11000,
        salaryMax: 13000,
        workDays: '週2日（水・金）',
        onCallRequired: false,
        benefits: ['交通費支給'],
        postedDate: '2026-01-07',
        status: 'published',
        views: 134,
        applications: 10
    },
    {
        id: 'job009',
        facilityName: '名古屋循環器病院',
        facilityType: '専門病院',
        title: '循環器内科医師（常勤）',
        specialty: '循環器内科',
        employmentType: '常勤',
        description: '循環器内科の外来・心カテ業務を担当していただきます。',
        location: '愛知県名古屋市',
        prefecture: '愛知県',
        salaryType: '年収',
        salaryMin: 1600,
        salaryMax: 2200,
        workDays: '週5日',
        onCallRequired: true,
        benefits: ['社会保険完備', '住宅手当', '当直手当'],
        postedDate: '2026-01-05',
        status: 'published',
        views: 167,
        applications: 8
    },
    {
        id: 'job010',
        facilityName: '品川眼科',
        facilityType: 'クリニック',
        title: '眼科医師（スポット・日曜日）',
        specialty: '眼科',
        employmentType: 'スポット',
        description: '日曜日の眼科外来診療を担当していただきます。',
        location: '東京都品川区',
        prefecture: '東京都',
        salaryType: '日給',
        salaryMin: 60000,
        salaryMax: 70000,
        workDays: '日曜日のみ',
        onCallRequired: false,
        benefits: ['交通費支給'],
        postedDate: '2026-01-10',
        status: 'published',
        views: 78,
        applications: 6
    },
    {
        id: 'job011',
        facilityName: '神奈川メディカルセンター',
        facilityType: '総合病院',
        title: '麻酔科医師（非常勤・手術日のみ）',
        specialty: '麻酔科',
        employmentType: '非常勤',
        description: '手術室での麻酔管理を担当していただきます。',
        location: '神奈川県川崎市',
        prefecture: '神奈川県',
        salaryType: '日給',
        salaryMin: 100000,
        salaryMax: 120000,
        workDays: '週2〜3日（火・木・金）',
        onCallRequired: false,
        benefits: ['交通費支給', '駐車場完備'],
        postedDate: '2026-01-04',
        status: 'published',
        views: 142,
        applications: 9
    },
    {
        id: 'job012',
        facilityName: '船橋耳鼻科クリニック',
        facilityType: 'クリニック',
        title: '耳鼻咽喉科医師（常勤）',
        specialty: '耳鼻咽喉科',
        employmentType: '常勤',
        description: '耳鼻咽喉科の外来診療を担当していただきます。',
        location: '千葉県船橋市',
        prefecture: '千葉県',
        salaryType: '年収',
        salaryMin: 1200,
        salaryMax: 1600,
        workDays: '週5日',
        onCallRequired: false,
        benefits: ['社会保険完備', '住宅手当'],
        postedDate: '2026-01-06',
        status: 'published',
        views: 98,
        applications: 5
    },
    {
        id: 'job013',
        facilityName: '大阪泌尿器科病院',
        facilityType: '専門病院',
        title: '泌尿器科医師（常勤）',
        specialty: '泌尿器科',
        employmentType: '常勤',
        description: '泌尿器科の外来・手術を担当していただきます。',
        location: '大阪府堺市',
        prefecture: '大阪府',
        salaryType: '年収',
        salaryMin: 1500,
        salaryMax: 2000,
        workDays: '週5日',
        onCallRequired: true,
        benefits: ['社会保険完備', '住宅手当', '学会参加支援'],
        postedDate: '2026-01-03',
        status: 'published',
        views: 189,
        applications: 7
    },
    {
        id: 'job014',
        facilityName: '湘南呼吸器クリニック',
        facilityType: 'クリニック',
        title: '呼吸器内科医師（非常勤・週2日）',
        specialty: '呼吸器内科',
        employmentType: '非常勤',
        description: '呼吸器内科の外来診療を担当していただきます。',
        location: '神奈川県藤沢市',
        prefecture: '神奈川県',
        salaryType: '時給',
        salaryMin: 11000,
        salaryMax: 13000,
        workDays: '週2日（月・水）',
        onCallRequired: false,
        benefits: ['交通費支給'],
        postedDate: '2026-01-08',
        status: 'published',
        views: 87,
        applications: 4
    },
    {
        id: 'job015',
        facilityName: '名古屋画像診断センター',
        facilityType: '診断センター',
        title: '放射線科医師（読影・在宅可）',
        specialty: '放射線科',
        employmentType: '非常勤',
        description: 'CT・MRI画像の読影業務を担当していただきます。在宅勤務可。',
        location: '愛知県名古屋市',
        prefecture: '愛知県',
        salaryType: '月給',
        salaryMin: 800000,
        salaryMax: 1200000,
        workDays: '週3〜4日',
        onCallRequired: false,
        benefits: ['在宅勤務可', '読影件数に応じたインセンティブ'],
        postedDate: '2026-01-05',
        status: 'published',
        views: 156,
        applications: 11
    },
    {
        id: 'job016',
        facilityName: '東京救急医療センター',
        facilityType: '救急病院',
        title: '救急科医師（非常勤・当直）',
        specialty: '救急科',
        employmentType: 'スポット',
        description: '救急外来の当直業務を担当していただきます。',
        location: '東京都江東区',
        prefecture: '東京都',
        salaryType: '日給',
        salaryMin: 100000,
        salaryMax: 120000,
        workDays: '当直のみ（月2〜4回）',
        onCallRequired: false,
        benefits: ['交通費支給', '仮眠室完備'],
        postedDate: '2026-01-09',
        status: 'published',
        views: 201,
        applications: 15
    },
    {
        id: 'job017',
        facilityName: 'かながわリハビリテーション病院',
        facilityType: 'リハビリ病院',
        title: 'リハビリテーション科医師（常勤）',
        specialty: 'リハビリテーション科',
        employmentType: '常勤',
        description: 'リハビリテーション科の外来・病棟管理を担当していただきます。',
        location: '神奈川県相模原市',
        prefecture: '神奈川県',
        salaryType: '年収',
        salaryMin: 1100,
        salaryMax: 1500,
        workDays: '週5日',
        onCallRequired: false,
        benefits: ['社会保険完備', '住宅手当'],
        postedDate: '2026-01-04',
        status: 'published',
        views: 123,
        applications: 6
    },
    {
        id: 'job018',
        facilityName: '大阪心臓血管外科病院',
        facilityType: '専門病院',
        title: '心臓血管外科医師（常勤）',
        specialty: '心臓血管外科',
        employmentType: '常勤',
        description: '心臓血管外科の手術を担当していただきます。',
        location: '大阪府吹田市',
        prefecture: '大阪府',
        salaryType: '年収',
        salaryMin: 2000,
        salaryMax: 3000,
        workDays: '週5日',
        onCallRequired: true,
        benefits: ['社会保険完備', '住宅手当', '学会参加支援', '専門医取得支援'],
        postedDate: '2026-01-02',
        status: 'published',
        views: 267,
        applications: 8
    },
    {
        id: 'job019',
        facilityName: '福岡肝臓クリニック',
        facilityType: 'クリニック',
        title: '消化器内科医師（非常勤・週2日）',
        specialty: '消化器内科',
        employmentType: '非常勤',
        description: '肝臓病を中心とした消化器内科外来診療を担当していただきます。',
        location: '福岡県福岡市',
        prefecture: '福岡県',
        salaryType: '時給',
        salaryMin: 12000,
        salaryMax: 14000,
        workDays: '週2日（火・木）',
        onCallRequired: false,
        benefits: ['交通費支給'],
        postedDate: '2026-01-07',
        status: 'published',
        views: 109,
        applications: 7
    },
    {
        id: 'job020',
        facilityName: '東京婦人科クリニック',
        facilityType: 'クリニック',
        title: '産婦人科医師（非常勤・週3日）',
        specialty: '産婦人科',
        employmentType: '非常勤',
        description: '婦人科外来診療を担当していただきます。分娩なし。',
        location: '東京都中央区',
        prefecture: '東京都',
        salaryType: '日給',
        salaryMin: 80000,
        salaryMax: 100000,
        workDays: '週3日（月・水・金）',
        onCallRequired: false,
        benefits: ['交通費支給', '駅直結'],
        postedDate: '2026-01-06',
        status: 'published',
        views: 145,
        applications: 9
    }
];

// 医療機関デモデータ
const DEMO_FACILITIES = [
    {
        id: 'fac001',
        name: '東京総合病院',
        type: '総合病院',
        address: '東京都港区六本木1-1-1',
        prefecture: '東京都',
        description: '地域医療を支える総合病院です。',
        departments: ['内科', '外科', '整形外科', '小児科', '産婦人科'],
        bedCount: 500,
        website: 'https://www.example.com',
        openJobs: 3
    },
    // ... 他の施設データ
];

// ユーティリティ関数
const formatSalary = (type, min, max) => {
    if (type === '年収') {
        return `${min}万円 〜 ${max}万円`;
    } else if (type === '時給') {
        return `時給 ${min.toLocaleString()}円 〜 ${max.toLocaleString()}円`;
    } else if (type === '日給') {
        return `日給 ${min.toLocaleString()}円 〜 ${max.toLocaleString()}円`;
    } else if (type === '月給') {
        return `月給 ${min.toLocaleString()}円 〜 ${max.toLocaleString()}円`;
    }
    return '';
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

// 検索・フィルタリング関数
const searchJobs = (query, filters = {}) => {
    let results = [...DEMO_JOBS];
    
    if (filters.specialty) {
        results = results.filter(job => job.specialty === filters.specialty);
    }
    
    if (filters.employmentType) {
        results = results.filter(job => job.employmentType === filters.employmentType);
    }
    
    if (filters.prefecture) {
        results = results.filter(job => job.prefecture === filters.prefecture);
    }
    
    if (query) {
        const q = query.toLowerCase();
        results = results.filter(job => 
            job.title.toLowerCase().includes(q) ||
            job.facilityName.toLowerCase().includes(q) ||
            job.description.toLowerCase().includes(q)
        );
    }
    
    return results;
};

const searchDoctors = (query, filters = {}) => {
    let results = [...DEMO_DOCTORS];
    
    if (filters.specialty) {
        results = results.filter(doc => doc.specialty === filters.specialty);
    }
    
    if (filters.employmentTypes && filters.employmentTypes.length > 0) {
        results = results.filter(doc => 
            doc.employmentTypes.some(type => filters.employmentTypes.includes(type))
        );
    }
    
    if (filters.prefecture) {
        results = results.filter(doc => 
            doc.preferredLocations.includes(filters.prefecture)
        );
    }
    
    if (filters.availability !== undefined) {
        results = results.filter(doc => doc.availability === filters.availability);
    }
    
    if (query) {
        const q = query.toLowerCase();
        results = results.filter(doc => 
            doc.name.toLowerCase().includes(q) ||
            doc.specialty.toLowerCase().includes(q) ||
            doc.bio.toLowerCase().includes(q)
        );
    }
    
    return results;
};

// ===============================================
// 共通UI機能
// ===============================================

// ドロップダウンメニューの初期化
function initUserMenu() {
    const userMenuButton = document.querySelector('.user-menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (!userMenuButton || !dropdownMenu) return;
    
    // メニューの開閉
    userMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    
    // メニュー外をクリックしたら閉じる
    document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && !userMenuButton.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
    
    // Escキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdownMenu.classList.remove('show');
        }
    });
}

// サインアウト機能
function signOut() {
    if (confirm('サインアウトしますか？')) {
        // セッションストレージをクリア
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userType');
        sessionStorage.removeItem('userName');
        
        // ログインページへリダイレクト
        window.location.href = 'login.html';
    }
}

// ページ読み込み時に初期化
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        initUserMenu();
    });
}
