import moment from "moment"
export const analyze=(text)=>{
    if(text.includes('hi')||text.includes('hello'))
    {
        return 'Hi how can i help you'
    }
    else if(text.includes('date'))
    {
        return moment().format('MMMM do YYYY')
    }
    else if(text.includes('time'))
    {
        return moment().format('h:mm:ss a')
    }
    else if(text.includes('are you a robot'))
    {
        return 'no i am a simple chatbot '
    }
    else if(text.includes('spider-man'))
    {
        return 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books'
    }
    else if(text.includes('tell me a joke'))
    {
        return 'What do you call bears with no ears?'
    }
    else if(text.includes('B'))
    {
        return 'congratulations you are correct';
    }
    return 'I cannot get your rephrase'
}