package kr.or.connect.reservation.dto;

import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import kr.or.connect.reservation.objmapper.CustomDateSerializer;

public class DisplayInfoImage {
	private long displayInfoImageId;
	private long displayInfoId;
	private long fileId;
	private String fileName;
	private String saveFileName;
	private String contentType;
	private Boolean deleteFlag;
	private Date createDate;
	private Date modifyDate;

	public DisplayInfoImage() {
	}

	public DisplayInfoImage(long displayInfoImageId, long displayInfoId, long fileId, String fileName,
			String saveFileName, String contentType, Boolean deleteFlag, Date createDate, Date modifyDate) {
		this.displayInfoImageId = displayInfoImageId;
		this.displayInfoId = displayInfoId;
		this.fileId = fileId;
		this.fileName = fileName;
		this.saveFileName = saveFileName;
		this.contentType = contentType;
		this.deleteFlag = deleteFlag;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
	}

	public long getDisplayInfoImageId() {
		return displayInfoImageId;
	}

	public void setDisplayInfoImageId(long displayInfoImageId) {
		this.displayInfoImageId = displayInfoImageId;
	}

	public long getDisplayInfoId() {
		return displayInfoId;
	}

	public void setDisplayInfoId(long displayInfoId) {
		this.displayInfoId = displayInfoId;
	}

	public long getFileId() {
		return fileId;
	}

	public void setFileId(long fileId) {
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
		return "DisplayInfoImage [displayInfoImageId=" + displayInfoImageId + ", displayInfoId=" + displayInfoId
				+ ", fileId=" + fileId + ", fileName=" + fileName + ", saveFileName=" + saveFileName + ", contentType="
				+ contentType + ", deleteFlag=" + deleteFlag + ", createDate=" + createDate + ", modifyDate="
				+ modifyDate + "]";
	}
}
