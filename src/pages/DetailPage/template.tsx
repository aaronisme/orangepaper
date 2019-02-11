export const htmlTemp = (headerImage: string, title: string, time: string, content: string): string => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-seri;
        }
        .header-image {
            display: block;
            position: relative;
            height: 0;
            padding-bottom: 66.7%;
        }
        .header-image img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .title {
            margin: 2rem 2rem 1rem 2rem; 
        }
        .title .detail {
            color: #2f2f2f;
            font-size: 2rem;
            font-weight: 700;
        }
        .title .time {
            padding-top: 0.5rem;
            color: #A6A6A6;
            font-size: 0.8rem;
            font-weight: 700;
        }
        .main-content {
            color: #2f2f2f;
            font-weight: 400;
            padding: 0 1rem;
            font-size: 1rem;
            line-height: 1.7;
            word-wrap: break-word;
        }

        .main-content img {
            width: 100%
        }

        h1 {
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
        }

        h2 {
            font-size: 1.25rem;
        }

        h3 {
            font-size: 1.15rem;
        }

        h4 {
            font-size: 1.05rem;
        }

        ol {
            list-style-position: inside;
            padding: 0;
        }

        ul {
            list-style-position: inside;
            padding: 0
        }
        a:link {
            color: #A6A6A6;
            text-decoration: none
        }
        a:visited {
            color: #A6A6A6;
        }
        blockquote {
            font-size: 1rem;
            width: 80%;
            margin: 2rem auto;
            font-family: Open Sans;
            font-style: italic;
            color: #555555;
            padding: 1rem;
            border-left: 8px solid #78C0A8;
            line-height: 1.6;
            position: relative;
            background: #EDEDED;
            word-wrap: break-word;
        }
    </style>
</head>

<body>
    <div class='header-image'>
        <img src=${headerImage} alt="">
    </div>
    <div class="title">
        <div class="detail">${title}</div>
        <div class='time'>${time}</div>
    </div>
    <div class="main-content">${content}</div>
</body>
</html>`