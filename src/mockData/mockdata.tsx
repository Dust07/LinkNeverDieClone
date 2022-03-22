import * as Interface from '../interfaces/landingPageInterface';
import {
    faGamepad,
    faFireFlameCurved,
    faCircleUp,
    faPhone,
    faEnvelope,
    faCircleUser,
    faStar,
} from "@fortawesome/free-solid-svg-icons"

//Game Category

//Search Component
export const searchCategory: string[] = ["Tất cả", "Game", "Phần mềm", "Phim"];

//Navigation Component
export const navBar: Interface.navBarInterface[] = [
    {
        context: "Trang chủ",
        url: "/",
        category: null
    },
    {
        context: "Phần mềm",
        url: "/",
        category: [
            {
                context: "",
                url: "",
                submenu: [
                    {
                        context: "Hệ thống - bảo mật",
                        url: ""
                    },
                    {
                        context: "Văn phòng",
                        url: ""
                    },
                    {
                        context: "Đa phương tiện",
                        url: ""
                    },
                    {
                        context: "Anti-virus",
                        url: ""
                    },
                    {
                        context: "Lập trình - thiết kế",
                        url: ""
                    },
                    {
                        context: "Hệ điều hành",
                        url: ""
                    },
                    {
                        context: "Tiện ích, ứng dụng",
                        url: ""
                    },
                ]
            }
        ]
    },
    {
        context: "Games",
        url: "",
        category: [
            {
                context: "Hành động",
                url: "",
                submenu:
                    [{
                        context: "Bắn súng góc nhìn thứ nhất",
                        url: "",
                    },
                    {
                        context: "Bắn súng góc nhìn thứ ba",
                        url: "",
                    },
                    {
                        context: "Chặt chém",
                        url: "",
                    },
                    ]
            },
            {
                context: "Phiêu lưu",
                url: "",
                submenu:
                    [{
                        context: "Nhập vai",
                        url: "",
                    },
                    {
                        context: "Kinh dị",
                        url: "",
                    },
                    {
                        context: "Souls-like",
                        url: "",
                    },
                    {
                        context: "Sinh tồn",
                        url: "",
                    },
                    {
                        context: "Thế giới mở",
                        url: "",
                    },

                    ]
            },
            {
                context: "Chiến thuật",
                url: "",
                submenu:
                    [{
                        context: "Turn-based",
                        url: "",
                    },
                    {
                        context: "Thời gian thực",
                        url: "",
                    },
                    {
                        context: "Thủ thành",
                        url: "",
                    },
                    ]
            },
            {
                context: "Giả lập",
                url: "",
                submenu:
                    [{
                        context: "Giả lập PS1",
                        url: "",
                    },
                    {
                        context: "Giả lập PS2",
                        url: "",
                    },
                    {
                        context: "Giả lập PSP",
                        url: "",
                    },
                    {
                        context: "Giả lập WiiU",
                        url: "",
                    },
                    {
                        context: "Giả lập Nintendo Switch",
                        url: "",
                    },
                    ]
            },
            {
                context: "Thể thao",
                url: "",
                submenu:
                    [{
                        context: "Đua xe",
                        url: "",
                    },
                    {
                        context: "Bóng đá",
                        url: "",
                    },
                    {
                        context: "Câu cá",
                        url: "",
                    },
                    {
                        context: "Bóng rổ",
                        url: "",
                    },
                    {
                        context: "Golf",
                        url: "",
                    },
                    {
                        context: "Đấu vật",
                        url: "",
                    },
                    {
                        context: "Bóng chày",
                        url: "",
                    },
                    {
                        context: "Tennis",
                        url: "",
                    },
                    {
                        context: "Bida",
                        url: "",
                    },
                    ]
            },
            {
                context: "Khác",
                url: "",
                submenu:
                    [{
                        context: "Indie",
                        url: "",
                    },
                    {
                        context: "Mô phỏng",
                        url: "",
                    },
                    {
                        context: "Multiplayer",
                        url: "",
                        tag: "Hot"
                    },
                    {
                        context: "Giải đố - trí tuệ",
                        url: "",
                    },
                    {
                        context: "Point & Click",
                        url: "",
                    },
                    {
                        context: "Side-scrolling",
                        url: "",
                    },
                    {
                        context: "Đối kháng",
                        url: "",
                    },
                    {
                        context: "Thẻ bài",
                        url: "",
                    },
                    {
                        context: "Việt hóa",
                        url: "",
                        tag: "Hot"
                    },
                    {
                        context: "GOG",
                        url: "",
                        tag: "Hot"
                    },
                    ]
            },
            {
                context: "Sắp xếp",
                url: "",
                submenu:
                    [{
                        context: "Mới phát hành",
                        url: "",
                    },
                    {
                        context: "Xem nhiều nhất",
                        url: "",
                        tag: "Hot"
                    },
                    {
                        context: "Sắp phát hành",
                        url: "",
                    },
                    {
                        context: "Bộ sưu tập",
                        url: "",
                    },
                    ]
            },
        ]
    },
    {
        context: "Phim HD - Bluray",
        url: "/",
        category: [
            {
                context: "",
                url: "",
                submenu: [
                    {
                        context: "Hành động",
                        url: ""
                    },
                    {
                        context: "Tâm lý",
                        url: ""
                    },
                    {
                        context: "Chiến tranh",
                        url: ""
                    },
                    {
                        context: "Võ thuật - kiếm hiệp",
                        url: ""
                    },
                    {
                        context: "Nhạc kịch",
                        url: ""
                    },
                    {
                        context: "Kinh dị",
                        url: ""
                    },
                    {
                        context: "Tội phạm - hình sự",
                        url: ""
                    },
                    {
                        context: "Phiêu lưu",
                        url: ""
                    },
                    {
                        context: "Hài hước",
                        url: ""
                    },
                    {
                        context: "Viễn tưởng",
                        url: ""
                    },
                    {
                        context: "Khoa học - tài liệu",
                        url: ""
                    },
                    {
                        context: "Hoạt hình",
                        url: ""
                    },
                    {
                        context: "Thể thao",
                        url: ""
                    },
                    {
                        context: "Tình cảm",
                        url: ""
                    },
                    {
                        context: "Kỳ ảo",
                        url: ""
                    },
                    {
                        context: "Giật gân",
                        url: ""
                    },
                    {
                        context: "Gia đình",
                        url: ""
                    },
                    {
                        context: "Bí ẩn",
                        url: ""
                    },
                    {
                        context: "Lịch sử",
                        url: ""
                    },
                    {
                        context: "Viễn Tây",
                        url: ""
                    },
                    {
                        context: "Tiểu sử",
                        url: ""
                    },
                    {
                        context: "Âu - Mỹ",
                        url: ""
                    },
                    {
                        context: "Trung Quốc",
                        url: ""
                    },
                    {
                        context: "Hàn Quốc",
                        url: ""
                    },
                    {
                        context: "Nhật Bản",
                        url: ""
                    },
                    {
                        context: "Ấn Độ",
                        url: ""
                    },
                    {
                        context: "Việt Nam",
                        url: ""
                    },
                    {
                        context: "Tổng hợp",
                        url: "",
                        tag: "Hot"
                    },
                    {
                        context: "Mới Upload",
                        url: ""
                    },
                    {
                        context: "Xem nhiều nhất",
                        url: "",
                        tag: "Hot"
                    },
                    {
                        context: "Sắp phát hành",
                        url: ""
                    },
                    {
                        context: "Bộ sưu tập",
                        url: "",
                        tag: "Hot"
                    },
                    {
                        context: "Diễn viên",
                        url: ""
                    },
                    {
                        context: "Đạo diễn",
                        url: ""
                    },
                ]
            }
        ]
    },
    {
        context: "Diễn đàn",
        url: "/forums",
        category: null
    },
    {
        context: "FAQs",
        url: "/faqs",
        category: null
    }
]
//Features Component
export const featuredGames: Interface.featuredGameInterface[] = [
    {
        name: "Spark in the Dark",
        category: ["Hành động", "Phiêu lưu", "Nhập vai", "Souls-like", "Indie"],
        image: "SparkInTheDark.jpg",
        description: "This place is shrouded in mystery. Horrible legends and gloom filled ancient stories, full of unimaginable things, have been going around for centuries. The Endless Dungeon that was created long before humans...So say the old people..."
    },
    {
        name: "Soulash",
        category: ["Nhập vai", "Thế giới mở", "Turn-based", "Traditional", "Rougelike"],
        image: "Soulash.jpg",
        description: ""
    },
    {
        name: "Beholder 3",
        category: ["Chiến thuật", "Indie", "Mô phỏng", "Point & Click", "Quản lý"],
        image: "Beholder3.jpg",
        description: ""
    },
    {
        name: "Shadow Warrior 3",
        category: ["Hành động", "Bắn súng góc nhìn thứ nhất"],
        image: "ShadowWarrior3.jpg",
        description: ""
    },
    {
        name: "Conan Chop Chop",
        category: ["Hành động", "Phiêu lưu", "Chặt chém"],
        image: "ConanChopChop.jpg",
        description: ""
    }
]

export const featuresOptions: Interface.featuresOptionInterface[] = [
    {
        name: "Game mới",
        iconURL: faGamepad
    },
    {
        name: "TOP game hay",
        iconURL: faFireFlameCurved
    },
    {
        name: "Update",
        iconURL: faCircleUp
    },
]

//Forum Component
export const forumPosts: Interface.forumPost[] = [
    {
        title: "ELDEN RING màn hình trắng has stopped working sau khi cài update",
        user: {
            avatar: "1.jpg",
            id: "Khương Trần"
        },
        category: "Games",
        viewCount: 879,
        answerCount: 18
    },

    {
        title: "Elden Ring bị viền đen khi dùng màn 21:9",
        user: {
            avatar: "2.jpg",
            id: "Nguyễn Khánh An"
        },
        category: "Games",
        viewCount: 72,
        answerCount: 1
    },
    {
        title: "Không tìm thấy Marvel Avengers trên thanh search của windows 10",
        user: {
            avatar: "3.jpg",
            id: "Phùng Tuấn Linh"
        },
        category: "Games",
        viewCount: 69,
        answerCount: 3
    },
    {
        title: "Elden ring Lag mặc dù máy khá mạnh",
        user: {
            avatar: "4.jpg",
            id: "nguyễn duy thái"
        },
        category: "Games",
        viewCount: 32,
        answerCount: 1
    },
    {
        title: "Cần tìm ứng dụng PC có autotune",
        user: {
            avatar: "5.jpg",
            id: "Vô danh"
        },
        category: "Phần mềm",
        viewCount: 342,
        answerCount: 2
    },
    {
        title: "[Hướng dẫn] Hướng dẫn lấy tất cả các item trong Megaman X2 không cheat",
        user: {
            avatar: "6.jpg",
            id: "Hai"
        },
        category: "Games",
        viewCount: 113,
        answerCount: 0
    },
]

//Footer Component
export const contactOption: Interface.contactOptionInterface[] = [
    {
        icon: faPhone,
        context: "092 116 5585"
    },
    {
        icon: faEnvelope,
        context: "tienphat0707@gmail.com"
    },
    {
        icon: faCircleUser,
        context: "facebook.com/DMs.Cloud"
    }
]

export const socialLinks: Interface.socialLinksInterface[] = [
    {
        icon: faStar,
        context: "Facebook"
    },
    {
        icon: faStar,
        context: "Twitter"
    },
    {
        icon: faStar,
        context: "Pinterest"
    },
    {
        icon: faStar,
        context: "LinkedIn"
    },
]