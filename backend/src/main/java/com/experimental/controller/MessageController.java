package com.experimental.controller;

import com.experimental.model.Message;
import com.experimental.service.MessageService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessageController {

  private MessageService messageService;

  public MessageController(MessageService messageService) {
    this.messageService = messageService;
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(value = "/test/get/json", method = RequestMethod.GET, produces = "application/json")
  public
  @ResponseBody
  List<Message> testGetJson() {
    return this.messageService.test();
  }
}
