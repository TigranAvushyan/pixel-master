package com.pixelmaster.backend.modal;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "utm", indexes = {@Index(name = "date_index", columnList = "date")})
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Utm {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String ip;

  @Column
  private String site;

  @Column
  private String os;

  @Column
  private Date date;

  public Utm(String ip, String site, String os, Date date) {
    this.ip = ip;
    this.site = site;
    this.os = os;
    this.date = date;
  }

  @Override
  public int hashCode() {
    return getClass().hashCode();
  }
}
