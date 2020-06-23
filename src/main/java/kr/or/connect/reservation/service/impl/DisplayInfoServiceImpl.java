package kr.or.connect.reservation.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.connect.reservation.dao.DisplayInfoDao;
import kr.or.connect.reservation.dto.Comment;
import kr.or.connect.reservation.dto.CommentImage;
import kr.or.connect.reservation.dto.DisplayInfo;
import kr.or.connect.reservation.dto.DisplayInfoImage;
import kr.or.connect.reservation.dto.ProductImage;
import kr.or.connect.reservation.dto.ProductPrice;
import kr.or.connect.reservation.service.DisplayInfoService;

@Service
public class DisplayInfoServiceImpl implements DisplayInfoService {

	@Autowired
	private DisplayInfoDao displayInfoDao;

	@Override
	public DisplayInfo getDisplayInfo(long displayInfoId) {
		return displayInfoDao.selectDisplayInfo(displayInfoId);
	}

	@Override
	public List<ProductImage> getProductImageList(long displayInfoId) {
		return displayInfoDao.selectProductImage(displayInfoId, DisplayInfoService.SELECT_IMAGE_COUNT_LIMIT);
	}

	@Override
	public DisplayInfoImage getdisplayInfoImage(long displayInfoId) {
		return displayInfoDao.selectDisplayInfoImage(displayInfoId);
	}

	@Override
	public List<Comment> getCommentList(long displayInfoId) {
		List<Comment> commentList = displayInfoDao.selectComment(displayInfoId);

		for (Comment comment : commentList) {
			List<CommentImage> commentImage = displayInfoDao.selectCommentImage(comment.getCommentId());
			comment.setCommentImages(commentImage);
		}

		return commentList;
	}

	@Override
	public double getAverageScore(long displayInfoId) {
		double scoreSum = 0;

		List<Double> scoreList = displayInfoDao.selectScore(displayInfoId);
		for (Double score : scoreList) {
			scoreSum += score;
		}

		if (scoreList.size() == 0)
			return 0;
		return scoreSum / scoreList.size();
	}

	@Override
	public List<ProductPrice> getProductPriceList(long displayInfoId) {
		return displayInfoDao.selectProductPrice(displayInfoId);
	}

}
