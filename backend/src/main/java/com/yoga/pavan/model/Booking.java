package com.yoga.pavan.model;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Booking {
    @Id
    private Long bookingId;
    private Integer noOfPersons;
    private Date fromDate;
    private Date toDate;
    private Double totalPrice;


    public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}


    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }


    public void setNoOfPersons(Integer noOfPersons) {
        this.noOfPersons = noOfPersons;
    }


    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }


    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }


    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }


    public Long getBookingId() {
        return bookingId;
    }


    public Integer getNoOfPersons() {
        return noOfPersons;
    }


    public Date getFromDate() {
        return fromDate;
    }


    public Date getToDate() {
        return toDate;
    }


    public Double getTotalPrice() {
        return totalPrice;
    }


    
    
}
