import { addConversation } from '../actions';
import { reducer } from '../reducer';

describe('# Test conversation', () => {
  it('should be return a reducer', () => {
    const botSaid = { recipient_id: 'uuid-66666', text: 'Hello' };
    const result = addConversation(botSaid);

    expect(result).toHaveProperty('type', 'ADD_CONVERSATION');
    expect(result).toHaveProperty('payload', botSaid);
  });

  it('should be emit when dispatch ADD_CONVERSATION', () => {
    const botSaid: BotResponse = { recipient_id: 'uuid-66666', text: 'Hello' };
    const initState = {
      conversation: [],
    };
    const result = reducer(initState, {
      type: 'ADD_CONVERSATION',
      payload: botSaid,
    });
    expect(result.conversation.length).toBe(1);
    expect(result.conversation[0]).toEqual(botSaid);
  });
});
