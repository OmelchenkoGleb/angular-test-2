package com.example.demo.Model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "shablonfile")
public class shablon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "filexls")
    @Lob()
    private byte[] bytes;
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
