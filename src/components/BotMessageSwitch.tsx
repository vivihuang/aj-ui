import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
import TextWithButtons from './TextWithButtons';
import {h} from 'preact';

interface BotMessageSwitchProps {
    message: BotResponse;
}
const BotMessageSwitch = ({message }: BotMessageSwitchProps) => {

    if (message.buttons.length) {
        return (<TextWithButtons message={message as BotResponseText} />)
    } else if (message.text) {
        return (<TextBubble text={message.text}/>);
    } else if (message.image) {
        return (<ImageBubble message={message}/>);
    }

    return null;
};

export default BotMessageSwitch;
