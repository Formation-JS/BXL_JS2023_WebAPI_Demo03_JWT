import { MemberDTO } from '../dto/member.dto.js';

const fakeData = {
    members: [
        {
            id: 1,
            username: 'Della',
            password: 'Test1234=',
            role: 'user'
        },
        {
            id: 2,
            username: 'Balthy',
            password: 'Test1234=',
            role: 'admin'
        },
    ]
}

const memberService = {

    login: (username, password) => {
        const member = fakeData.members.find(m => m.username === username && m.password === password);
        return !!member ? new MemberDTO(member) : null;
    }

};

export default memberService;