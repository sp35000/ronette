import { useState } from 'react';
function ChatMock({question}) {
  const [dialog, setDialog] = useState('');  
  let response = dialog+question;
    return (
    response    
  )
}
export default ChatMock
