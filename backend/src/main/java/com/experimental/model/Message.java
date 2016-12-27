package com.experimental.model;

public class Message {

  private String title;
  private String message;

  public Message(String title, String message) {
    this.title = title;
    this.message = message;
  }

  public String getTitle() {
    return this.title;
  }

  public String getMessage() {
    return this.message;
  }

}
