package kr.or.connect.reservation.dto;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import kr.or.connect.reservation.objmapper.CustomDateSerializer;

public class Comment {

	private Long commentId;
	private Long productId;
	private Long reservationInfoId;
	private Long score;
	private String comment;
	private String reservationName;
	private String reservationTelephone;
	private String reservationEmail;
	private Date reservationDate;
	private Date createDate;
	private Date modifyDate;
	private List<CommentImage> commentImages;

	public Comment() {
	}

	public Comment(Long commentId, Long productId, Long reservationInfoId, Long score, String comment,
			String reservationName, String reservationTelephone, String reservationEmail, Date reservationDate,
			Date createDate, Date modifyDate, List<CommentImage> commentImages) {
		super();
		this.commentId = commentId;
		this.productId = productId;
		this.reservationInfoId = reservationInfoId;
		this.score = score;
		this.comment = comment;
		this.reservationName = reservationName;
		this.reservationTelephone = reservationTelephone;
		this.reservationEmail = reservationEmail;
		this.reservationDate = reservationDate;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.commentImages = commentImages;
	}

	public Long getCommentId() {
		return commentId;
	}

	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public Long getReservationInfoId() {
		return reservationInfoId;
	}

	public void setReservationInfoId(Long reservationInfoId) {
		this.reservationInfoId = reservationInfoId;
	}

	public Long getScore() {
		return score;
	}

	public void setScore(Long score) {
		this.score = score;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getReservationName() {
		return reservationName;
	}

	public void setReservationName(String reservationName) {
		this.reservationName = reservationName;
	}

	public String getReservationTelephone() {
		return reservationTelephone;
	}

	public void setReservationTelephone(String reservationTelephone) {
		this.reservationTelephone = reservationTelephone;
	}

	public String getReservationEmail() {
		return reservationEmail;
	}

	public void setReservationEmail(String reservationEmail) {
		this.reservationEmail = reservationEmail;
	}

	public Date getReservationDate() {
		return reservationDate;
	}

	public void setReservationDate(Date reservationDate) {
		this.reservationDate = reservationDate;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public List<CommentImage> getCommentImages() {
		return commentImages;
	}

	public void setCommentImages(List<CommentImage> commentImages) {
		this.commentImages = commentImages;
	}

	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", productId=" + productId + ", reservationInfoId="
				+ reservationInfoId + ", score=" + score + ", comment=" + comment + ", reservationName="
				+ reservationName + ", reservationTelephone=" + reservationTelephone + ", reservationEmail="
				+ reservationEmail + ", reservationDate=" + reservationDate + ", createDate=" + createDate
				+ ", modifyDate=" + modifyDate + ", commentImages=" + commentImages + "]";
	}
}
