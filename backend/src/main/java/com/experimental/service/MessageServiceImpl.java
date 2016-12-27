package com.experimental.service;

import com.experimental.model.Message;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

  public List<Message> test() {
    ArrayList<Message> messages = new ArrayList<Message>();

    messages.add(new Message("Message1", "Hello, world!"));
    messages.add(new Message("Message2", "Another one!"));

    return messages;
  }
}
