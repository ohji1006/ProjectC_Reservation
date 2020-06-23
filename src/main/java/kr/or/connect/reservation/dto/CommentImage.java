package kr.or.connect.reservation.dto;

import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import kr.or.connect.reservation.objmapper.CustomDateSerializer;

public class CommentImage {
	private Long imageId;
	private Long reservationInfoId;
	private Long reservationUserCommentId;
	private Long fileId;
	private String fileName;
	private String saveFileName;
	private String contentType;
	private Boolean deleteFlag;
	private Date createDate;
	private Date modifyDate;

	public CommentImage() {
	}

	public CommentImage(Long imageId, Long reservationInfoId, Long reservationUserCommentId, Long fileId,
			String fileName, String saveFileName, String contentType, Boolean deleteFlag, Date createDate,
			Date modifyDate) {
		super();
		this.imageId = imageId;
		this.reservationInfoId = reservationInfoId;
		this.reservationUserCommentId = reservationUserCommentId;
		this.fileId = fileId;
		this.fileName = fileName;
		this.saveFileName = saveFileName;
		this.contentType = contentType;
		this.deleteFlag = deleteFlag;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
	}

	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}

	public Long getReservationInfoId() {
		return reservationInfoId;
	}

	public void setReservationInfoId(Long reservationInfoId) {
		this.reservationInfoId = reservationInfoId;
	}

	public Long getReservationUserCommentId() {
		return reservationUserCommentId;
	}

	public void setReservationUserCommentId(Long reservationUserCommentId) {
		this.reservationUserCommentId = reservationUserCommentId;
	}

	public Long getFileId() {
		return fileId;
	}

	public void setFileId(Long fileId) {
		this.fileId = fileId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getSaveFileName() {
		return saveFileName;
	}

	public void setSaveFileName(String saveFileName) {
		this.saveFileName = saveFileName;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public Boolean getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(Boolean deleteFlag) {
		this.deleteFlag = deleteFlag;
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

	@Override
	public String toString() {
		return "CommentImage [imageId=" + imageId + ", reservationInfoId=" + reservationInfoId
				+ ", reservationUserCommentId=" + reservationUserCommentId + ", fileId=" + fileId + ", fileName="
				+ fileName + ", saveFileName=" + saveFileName + ", contentType=" + contentType + ", deleteFlag="
				+ deleteFlag + ", createDate=" + createDate + ", modifyDate=" + modifyDate + "]";
	}
}
