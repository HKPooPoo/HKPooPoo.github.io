// let d = 0
// while (true) {
//     let a = +prompt(
//         `請選擇操作：
//     1. 存錢
//         2. 取錢
//         3. 查看餘額
//         4. 退出
//         你現在的餘額為${d}`
//         )
//     if (a === 1) {
//         let b = +prompt("存錢")
//         d += b
//     }
//     else if (a === 2) {
//         if (d >= 0) {
//             let c = +prompt("取錢")
//             if (d - c < 0) {
//                 alert("餘額不足")
//             }
//             else if (d - c > 0) {
//                 d -= c
//             }
//         }
//     }
//     else if (a === 3) {
//         alert(`餘額為${d}`)
//     }
//     else if (a === 4){
//         break
//     }
// }
// let a = 1; // 問題編號
// let b = 0; // 分數
// let c = 0; // 

// for (let i = 0; i < 1; i++) {
//     let d = prompt(`
//         這裏是自動評分測驗
//         你現在的分數為${b}
//         請輸入代表選項的英文字母以進行答題：
//         請輸入除代表選項的英文字母外的字符以測驗
//         問題${a}: 以下哪個最符合對CE的描述？
//         A) 作弊工具
//         B) 內存修改工具
//     `);

//     if (d === 'a' || d === 'A') {
//         alert(`你答錯了`);
//     } else if (d === 'b' || d === 'B') {
//         alert(`你答對了`);
//         b++;
//     } else if (d != 'a' && d != 'A' && d != 'b' && d != 'B') {
//         break;
//     }

//     a++;
// }

// for (let i = 0; i < 1; i++) {
//     let d = prompt(`
//         這裏是自動評分測驗
//         你現在的分數為${b}
//         請輸入數字以進行操作：
//         請輸入4以停止程序
//         問題${a}: 以下哪個最符合對CE的描述？
//         A) 修改程序内存的數據
//         B) 作弊
//     `);

//     if (d === 'a' || d === 'A') {
//         alert(`你答對了`);
//         b++
//     } else if (d === 'b' || d === 'B') {
//         alert(`你答錯了`);
//     } else if (d != 'a' && d != 'A' && d != 'b' && d != 'B') {
//         break;
//     }

//     a++;
// }

// for (let i = 0; i < 1; i++) {
//     let d = prompt(`
//         這裏是自動評分測驗
//         你現在的分數為${b}
//         請輸入數字以進行操作：
//         請輸入4以停止程序
//         問題${a}: CT是什麽？
//         A) Cheat Engine 的外挂軟件
//         B) 一個用於儲存修改遊戲數據的文件
//     `);

//     if (d === 'a' || d === 'A') {
//         alert(`你答錯了`);
//     } else if (d === 'b' || d === 'B') {
//         alert(`你答對了`);
//         b++;
//     } else if (d != 'a' && d != 'A' && d != 'b' && d != 'B') {
//         break;
//     }

//     a++;
// }

// for (let i = 0; i < 1; i++) {
//     let d = prompt(`
//         這裏是自動評分測驗
//         你現在的分數為${b}
//         請輸入數字以進行操作：
//         請輸入4以停止程序
//         問題${a}: 不應該使用CE幹什麽？
//         A) 在聯機的情況下修改數據
//         B) 依賴CE
//         C) 炫耀自己透過CE修改所得到的戰利品
//         D) 以上皆是
//     `);

//     if (d === 'd' || d === 'D') {
//         alert(`你答對了`);
//         b++;
//     } else if (d === 'a' || d === 'A' || d === 'b' || d === 'B' || 
//     d === 'c' || d === 'C') {
//         alert(`你答錯了`);
//     } else if (d != 'a' && d != 'A' && d != 'b' && d != 'B' && 
//     d != 'c' && d != 'C' && d != 'd' && d != 'D' && d != 'D') {
//         break;
//     }

//     a++;
// }
function quiz_1() {
let a = 1; // 問題編號
let b = 0; // 分數

for (i = 0; i < 1; i++) {
        let d = prompt(`這裡是自動評分測試
        你現在的分數為${b}
        請按照提示輸入答案或操作：
        輸入 1 開始測試
        輸入 2 停止測試
        `);

    if (d === '1') {
        // 第一個問題
        let answer1 = prompt(`
            問題${a}: 以下哪個最符合對 Cheat Engine (CE) 的描述？
            A) 作弊工具
            B) 內存修改工具
        `);
        if (answer1 === 'b' || answer1 === 'B') {
            alert(`你答對了！`);
            b++;
        // } else if (answer1 === null) {
        //     break;
        } else {
            alert(`你答錯了！`);
        }
        a++;

        // 第二個問題
        let answer2 = prompt(`
            問題${a}: 以下哪個最符合對 Cheat Table （CT)的描述？
            A) 一種用於儲存CE修改遊戲內存數據地址的文件格式
            B) 一種CE的外挂程式
        `);
        if (answer2 === 'a' || answer2 === 'A') {
            alert(`你答對了！`);
            b++;
        // } else if (answer2 === null) {
        //     break;
        } else {
            alert(`你答錯了！`);
        }
        a++;

        // 第三個問題
        let answer3 = prompt(`
            問題${a}: 利用基地址製作的CT是基於什麼原理製作的？
            A) 基於遊戲程序中的指針地址
            B) 基於遊戲程序中的偏移地址
            C) 基於遊戲程序中的動態內存地址
            D) 基於遊戲程序中的靜態內存地址
        `);
        if (answer3 === 'd' || answer3 === 'D') {
            alert(`你答對了！`);
            b++;
        // } else if (answer3 === null) {
        //     break;
        } else {
            alert(`你答錯了！`);
        }
        a++;

        // 第四個問題
        let answer4 = prompt(`
            問題${a}: 哪種類型的 Cheat Table 最容易受到遊戲更新的影響？
            A) 搜索型 Cheat Table
            B) 指針型 Cheat Table
            C) 基地址型 Cheat Table
            D) 所有選項皆是
        `);
        if (answer4 === 'c' || answer4 === 'C') {
            alert(`你答對了！`);
            b++;
        // } else if (answer4 === null) {
        //     break;
        } else {
            alert(`你答錯了！`);
        }
        a++;

        // 第五個問題
        let answer5 = prompt(`
            問題${a}: 不應該使用CE幹什麽？
            A) 以下皆是
            B) 在聯機的情況下修改數據
            C) 炫耀自己透過CE修改所得到的戰利品
            D) 依賴CE
        `);
        if (answer5 === 'a' || answer5 === 'A') {
            alert(`你答對了！`);
            b++;
        // } else if (answer5 === null) {
        //     break;
        } else {
            alert(`你答錯了！`);
        }
        a++;

    } else if (d === '2') {
        break;
    } else {
        alert(`請輸入有效的操作！`);
    }
} 
    alert(`智商測試完畢！你的最終得分為 ${b} 分！`);
}