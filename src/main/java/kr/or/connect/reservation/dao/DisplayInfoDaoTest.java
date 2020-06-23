package kr.or.connect.reservation.dao;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.dto.Comment;
import kr.or.connect.reservation.dto.CommentImage;
import kr.or.connect.reservation.dto.DisplayInfo;
import kr.or.connect.reservation.dto.DisplayInfoImage;
import kr.or.connect.reservation.dto.ProductImage;
import kr.or.connect.reservation.dto.ProductPrice;

public class DisplayInfoDaoTest {
	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);

		DisplayInfoDao displayInfoDao = ac.getBean(DisplayInfoDao.class);

//		List<ProductImage> infoDtos = displayInfoDao.selectProductImage(2);
//		for(ProductImage pi : infoDtos) {
//			System.out.println(pi.toString());
//		}

//		DisplayInfoImage imageDto = displayInfoDao.selectDisplayInfoImage(10);
//		System.out.println(imageDto.toString());

//		List<ProductPrice> productPriceDtos = displayInfoDao.selectProductPrice(1);
//		for(ProductPrice pi : productPriceDtos) {
//			System.out.println(pi.toString());
//		}

//		List<Comment> productPriceDtos = displayInfoDao.selectComment(1);
//		for(Comment com : productPriceDtos) {
//			System.out.println(com.toString());
//		}

//		List<Comment> commentDtos = displayInfoDao.selectComment(1);
//		for(Comment com : commentDtos) {
////			System.out.println(com.toString());
//			
//			List<CommentImage> commentImageDto = displayInfoDao.selectCommentImage(com.getCommentId());
////			System.out.println(commentImageDto);
//			com.setCommentImages(commentImageDto);
//		}	
//		
//		for(Comment com : commentDtos) {
//			System.out.println(com.toString());
//		}	
//		
//		List<CommentImage> displayInfoImageDtos = displayInfoDao.selectCommentImage(1);
//		for(CommentImage com : displayInfoImageDtos) {
//			System.out.println(com.toString());
//		}		

		// score 테스트
//		Double sum = new Double(0) ;		
//		List<Double> dList = displayInfoDao.selectScore(1);
//		for(Double d : dList) {
//			sum += d;
//		}
//		System.out.println(sum/dList.size());
		double scoreSum = 0;

		List<Double> scoreList = displayInfoDao.selectScore(1);
		for (Double score : scoreList) {
			scoreSum += score;
		}

		System.out.println(scoreSum / scoreList.size());
	}
}
