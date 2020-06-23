package kr.or.connect.reservation.service;

import java.util.List;

import kr.or.connect.reservation.dto.Comment;
import kr.or.connect.reservation.dto.DisplayInfo;
import kr.or.connect.reservation.dto.DisplayInfoImage;
import kr.or.connect.reservation.dto.ProductImage;
import kr.or.connect.reservation.dto.ProductPrice;

public interface DisplayInfoService {
	public static final long SELECT_IMAGE_COUNT_LIMIT = 2;

	public DisplayInfo getDisplayInfo(long displayInfoId);

	public List<ProductImage> getProductImageList(long displayInfoId);

	public DisplayInfoImage getdisplayInfoImage(long displayInfoId);

	public List<Comment> getCommentList(long displayInfoId);

	public double getAverageScore(long displayInfoId);

	public List<ProductPrice> getProductPriceList(long displayInfoId);
}
