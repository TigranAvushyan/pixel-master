package com.pixelmaster.backend.modal;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "utm")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class UtmEntity {
  @Id
  @GeneratedValue
  private Long id;

  @Column
  private String ip;

  @Column
  private String site;

  @Column
  private String os;

  @Column
  private Date date;

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
    UtmEntity utmEntity = (UtmEntity) o;
    return id != null && Objects.equals(id, utmEntity.id);
  }

  @Override
  public int hashCode() {
    return getClass().hashCode();
  }
}
